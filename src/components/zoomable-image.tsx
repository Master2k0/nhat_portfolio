import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IZoomableImageProps {
  src: string;
  alt?: string;
  className?: string;
}

const ZoomableImage = ({ src, alt, className }: IZoomableImageProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const uniqueId = `image-${src}`;

  return (
    <>
      <motion.img
        layoutId={uniqueId}
        src={src}
        alt={alt}
        className={`cursor-zoom-in ${className}`}
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        style={{ willChange: "opacity, transform" }}
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
              style={{ willChange: "opacity, transform" }}
              // Nhớ là phải set cứng width và height cho tấm ảnh để có thể chạy smooth animation trên SAFARI
              className="relative z-10 aspect-[943/742] w-[90%] cursor-zoom-out rounded-[8px] object-cover shadow-2xl xl:h-[742px] xl:w-[943px]"
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ZoomableImage;
