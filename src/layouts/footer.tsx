import { siteConfig } from "@/configs"
import { cn } from "@/libs/utils"

const Footer = () => {
  return (
    <div className={
      cn(
        "w-full bg-block-bg px-4 pt-5 pb-8 flex flex-col gap-5",
        "lg:px-[160px] lg:pt-[60px] lg:pb-[100px]"
      )
    }>
      <p className={cn(
        "text-24b text-white-footer",
        "lg:text-32b"
      )}>Contact info</p>
      <div className="flex flex-col gap-2">
        <span className={cn(
          "text-14r text-gravel-100",
          "lg:text-16r"
        )}>Please feel free to contact me via&nbsp;
          <a className={cn(
            "text-new-gradient text-14m",
            "lg:text-16m"
          )} href={siteConfig.contact.linkedin.href} target="_blank" >Linkedin</a>
        </span>
        <span className={cn(
          "text-14r text-gravel-100",
          "lg:text-16r"
        )}> or send an email to&nbsp;
          <a className={cn(
            "text-new-gradient text-14m",
            "lg:text-16m"
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
  )
}

export default Footer
