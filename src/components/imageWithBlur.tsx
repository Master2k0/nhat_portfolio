import { useState } from "react";

interface ImageWithBlurProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageWithBlur = ({ src, alt, className }: ImageWithBlurProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`w-full h-full transition-opacity duration-700 ease-in-out ${isLoaded ? 'opacity-100 blur-0 ' : 'opacity-0 blur-lg '}`}
        onLoad={() => setIsLoaded(true)}
      />

    </div>
  )
}

export default ImageWithBlur;