// import { useToast } from "@/hooks/use-toast";
import BorderGradientWrapper from "@/components/border-gradient-wrapper";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/libs/utils";
import { useNavigate } from "react-router-dom";
// import { useAppContext } from "@/src/providers/app-provider";

interface ProjectCardProps {
  img: string;
  title: string;
  description: string;
  isReady: boolean;
  href: string;
  className?: string;
  imgClassName?: string;
  titleClassName?: string;
  descClassName?: string;
}

function ProjectCard({
  img,
  title,
  description,
  isReady,
  href,
  className = "",
  imgClassName = "",
  titleClassName = "",
  descClassName = "",
}: ProjectCardProps) {
  // const router = useRouter()
  // const { toast } = useToast()
  // const { keyValue, onChangeOpenPasswordDialog, onChangeCbUrl } = useAppContext()
  const navigate = useNavigate();
  return (
    <BorderGradientWrapper
      className={cn(
        "hover:hover-bg-gradient hover-bg-gradient relative w-full overflow-visible rounded-[16px] md:rounded-[24px] lg:rounded-[32px]",
        className,
      )}
    >
      <div className="h-full overflow-hidden rounded-[16px] bg-block-bg md:rounded-[24px] lg:rounded-[32px]">
        <div className={cn("relative w-full overflow-hidden", imgClassName)}>
          <img
            src={img}
            alt={title}
            className="aspect-[358/201] object-cover xl:aspect-[350/198] 3xl:aspect-[532/300]"
          />
        </div>
        <div className="px-5 py-4 xl:px-6 xl:py-3 3xl:px-10 3xl:py-5">
          <div className="flex flex-col gap-1 text-center 3xl:gap-2">
            <div
              className={cn(
                "line-clamp-1 text-16b font-bold text-gravel-25 md:font-semibold lg:font-bold xl:text-14b 3xl:text-20b",
                titleClassName,
              )}
            >
              {title}
            </div>
            <div
              className={cn(
                "line-clamp-2 text-pretty text-12r text-gravel-100 xl:text-10r 3xl:text-16r",
                descClassName,
              )}
            >
              {description}
            </div>
          </div>
          <div className="mt-4 flex justify-center md:mt-4 lg:mt-5 xl:mt-3 3xl:mt-5">
            <button
              type="button"
              onClick={() => {
                if (isReady) {
                  // if (!keyValue) {
                  //     onChangeCbUrl(href)
                  //     onChangeOpenPasswordDialog(true);
                  //     return;
                  // }
                  navigate(href);
                  return;
                }
                return toast({
                  description:
                    "The project is not ready for viewing, but you can contact me to see the preview ~ 😄",
                });
              }}
              className={cn(
                "h-9 rounded-[5.26px] px-4 text-12s xl:h-8 xl:px-6 xl:text-10s 3xl:h-11 3xl:rounded-[7.88px] 3xl:text-14s",
                isReady ? "bg-gradient-2 text-26" : "bg-gravel-800 text-gravel-500",
              )}
            >
              {isReady ? "Ready to view" : "Coming soon"}
            </button>
          </div>
        </div>
      </div>
    </BorderGradientWrapper>
  );
}

export default ProjectCard;
