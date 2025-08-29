import { useGlobalContext } from "@/context/global-context"
import { cn } from "@/libs/utils";

type OverlayProps = {
  className?: string;
}

const Overlay = ({ className }: OverlayProps) => {
  const { overlay } = useGlobalContext()
  return (
    overlay && <div className={cn(
      "bg-black/80 w-full h-full absolute top-0 left-0 ",
      className
    )} />

  )
}

export default Overlay
