import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/libs/utils";

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

  //   Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

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
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.img
              layoutId={uniqueId}
              src={src}
              alt={alt}
              loading="eager"
              style={{
                willChange: "opacity, transform",
                aspectRatio:
                  imageDimensions.width && imageDimensions.height
                    ? `${imageDimensions.width} / ${imageDimensions.height}`
                    : undefined,
              }}
              // Nhớ là phải set cứng width và height cho tấm ảnh để có thể chạy smooth animation trên SAFARI
              className={cn(
                "relative z-10 cursor-zoom-out rounded-[8px] object-cover shadow-2xl",
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
