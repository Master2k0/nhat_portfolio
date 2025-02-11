// import { useToast } from "@/hooks/use-toast";
import BorderGradientWrapper from "@/components/border-gradient-wrapper";
import { cn } from "@/libs/utils";
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
  className = "",
  imgClassName = "",
  titleClassName = "",
  descClassName = "",
}: ProjectCardProps) {
  // const router = useRouter()
  // const { toast } = useToast()
  // const { keyValue, onChangeOpenPasswordDialog, onChangeCbUrl } = useAppContext()

  return (
    <BorderGradientWrapper
      className={cn(
        "h-[267px] w-[272px] rounded-[16px] md:h-[394.5px] md:w-[408px] md:rounded-[24px] lg:h-[516px] lg:w-[544px] lg:rounded-[32px]",
        className,
      )}
    >
      <div className="h-full overflow-hidden rounded-[16px] bg-block-bg md:rounded-[24px] lg:rounded-[32px]">
        <div
          className={cn(
            "relative h-[153px] w-full overflow-hidden md:h-[229.5px] lg:h-[306px]",
            imgClassName,
          )}
        >
          <img src={img} alt={title} className="object-cover" />
        </div>
        <div className="h-full px-5 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6">
          <div className="space-y-2 text-center">
            <div
              className={cn(
                "text-xs md:text-lg lg:text-2xl line-clamp-1 font-bold text-gravel-25 md:font-semibold lg:font-bold",
                titleClassName,
              )}
            >
              {title}
            </div>
            <div
              className={cn(
                "lg:text-lg md:text-sm line-clamp-2 text-pretty text-2xs text-gravel-100",
                descClassName,
              )}
            >
              {description}
            </div>
          </div>
          <div className="mt-2 flex justify-center md:mt-4 lg:mt-5">
            <button
              type="button"
              onClick={() => {
                if (isReady) {
                  // if (!keyValue) {
                  //     onChangeCbUrl(href)
                  //     onChangeOpenPasswordDialog(true);
                  //     return;
                  // }
                  //   router.push(href);
                  return;
                }
                // return toast({
                //   description:
                //     "The project is not ready for viewing, but you can contact me to see the preview ~ 😄",
                // });
              }}
              className={cn(
                "md:text-sm text-xs h-8 w-[104px] rounded-[4px] text-2xs font-semibold md:h-[44px] md:w-[139px] md:rounded-[5.82px] lg:rounded-[8px]",
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
