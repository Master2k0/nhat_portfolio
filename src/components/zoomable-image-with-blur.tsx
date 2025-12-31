import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/libs/utils";
import { Repeat2Icon, SquareXIcon, ZoomInIcon, ZoomOutIcon } from "lucide-react";

interface ZoomableImageWithBlurProps {
  src: string;
  alt: string;
  wrapperClassName?: string;
  imgClassName?: string;
  imgOpenClassName?: string;
}

const ZoomableImageWithBlur = ({
  src,
  alt,
  wrapperClassName,
  imgClassName,
  imgOpenClassName,
}: ZoomableImageWithBlurProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);

  //   Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      // Reset zoom and position when closing
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setScale((prev) => Math.min(Math.max(1, prev + delta), 3));
  };

  // Handle zoom buttons
  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale((prev) => Math.max(prev - 0.25, 1));
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  // Handle dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      e.preventDefault();
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const uniqueId = `image-${src}`;
  return (
    <div className={`relative overflow-hidden ${wrapperClassName} rounded-sm xl:rounded-[8px]`}>
      <motion.img
        onLoad={(e) => {
          setImageDimensions({
            width: e.currentTarget.naturalWidth,
            height: e.currentTarget.naturalHeight,
          });
          setIsLoaded(true);
        }}
        layoutId={uniqueId}
        src={src}
        alt={alt}
        className={cn(
          "h-full w-full rounded-sm transition-opacity duration-700 ease-in-out xl:rounded-[8px]",
          isLoaded ? "opacity-100 blur-0" : "opacity-0 blur-lg",
          "cursor-zoom-in",
          imgClassName,
        )}
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        style={{ willChange: "opacity" }}
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              className="absolute left-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              aria-label="Close"
            >
              <SquareXIcon />
            </button>

            {/* Zoom Controls */}
            <div className="absolute right-4 top-4 z-20 flex flex-col gap-2">
              <button
                onClick={handleZoomIn}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                aria-label="Zoom in"
              >
                <ZoomInIcon />
              </button>
              <button
                onClick={handleZoomOut}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                aria-label="Zoom out"
              >
                <ZoomOutIcon />
              </button>
              <button
                onClick={handleReset}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                aria-label="Reset zoom"
              >
                <Repeat2Icon />
              </button>
            </div>

            {/* Zoom level indicator */}
            <div className="text-sm absolute bottom-4 left-4 z-20 rounded-lg bg-white/10 px-3 py-2 text-white backdrop-blur-sm">
              {Math.round(scale * 100)}%
            </div>

            <motion.img
              ref={imageRef}
              layoutId={scale === 1 ? uniqueId : undefined}
              src={src}
              alt={alt}
              loading="eager"
              onWheel={handleWheel}
              onMouseDown={handleMouseDown}
              animate={{
                scale: scale,
                x: position.x,
                y: position.y,
              }}
              style={{
                willChange: "opacity, transform",
                aspectRatio:
                  imageDimensions.width && imageDimensions.height
                    ? `${imageDimensions.width} / ${imageDimensions.height}`
                    : undefined,
                cursor: scale > 1 ? (isDragging ? "grabbing" : "grab") : "zoom-out",
              }}
              // Nhớ là phải set cứng width và height cho tấm ảnh để có thể chạy smooth animation trên SAFARI
              className={cn(
                "relative z-10 rounded-[8px] object-cover shadow-2xl",
                imageDimensions.width > imageDimensions.height
                  ? "w-[80%] xl:w-[50%]"
                  : "h-[50%] xl:h-[70%]",
                imgOpenClassName,
              )}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ZoomableImageWithBlur;
