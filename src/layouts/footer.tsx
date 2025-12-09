import { siteConfig } from "@/configs"
import { cn } from "@/libs/utils"

const Footer = () => {
  return (
    <div className={
      cn(
        "w-full bg-block-bg pt-5 pb-8 px-4 ",
        "xl:pt-[60px] xl:pb-[100px] xl:px-0"
      )
    }>
      <div className={cn(
        "flex flex-col gap-5",
        "xl:mx-auto xl:max-w-[1080px]"
      )}>

        <p className={cn(
          "text-24b text-white-footer",
          "xl:text-32b"
        )}>Contact info</p>
        <div className="flex flex-col gap-2">
          <span className={cn(
            "text-14r text-gravel-100",
            "xl:text-16r"
          )}>Please feel free to contact me via&nbsp;
            <a className={cn(
              "text-new-gradient text-14m",
              "xl:text-16m"
            )} href={siteConfig.contact.linkedin.href} target="_blank" >Linkedin</a>
          </span>
          <span className={cn(
            "text-14r text-gravel-100",
            "xl:text-16r"
          )}> or send an email to&nbsp;
            <a className={cn(
              "text-new-gradient text-14m",
              "xl:text-16m"
            )}
              href={siteConfig.contact.email.href}
              target="_blank"
            >nhatnguyen.wk@gmail.com </a>
          </span>
        </div>
        <p className="text-14r text-gravel-100 flex gap-3">I hope to collaborate with you in the future.
          <img src="/footer/icons/rocket.svg" alt="" />
        </p>
      </div>

    </div>
  )
}

export default Footer
