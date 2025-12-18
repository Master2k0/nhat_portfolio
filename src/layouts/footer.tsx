import { siteConfig } from "@/configs";
import { cn } from "@/libs/utils";

const Footer = () => {
  return (
    <div className={cn("w-full bg-block-bg px-4 pb-8 pt-5", "xl:px-0 xl:pb-[100px] xl:pt-[60px]")}>
      <div className={cn("flex flex-col gap-5", "xl:mx-auto xl:max-w-[1080px]")}>
        <p className={cn("text-24b text-white-footer", "xl:text-32b")}>Contact info</p>
        <div className="flex flex-col gap-2">
          <span className={cn("text-14r text-gravel-100", "xl:text-16r")}>
            Please feel free to contact me via&nbsp;
            <a
              className={cn("text-14m text-yellow", "xl:text-16m")}
              href={siteConfig.contact.linkedin.href}
              target="_blank"
            >
              Linkedin
            </a>
          </span>
          <span className={cn("text-14r text-gravel-100", "xl:text-16r")}>
            {" "}
            or send an email to&nbsp;
            <a
              className={cn("text-14m text-yellow", "xl:text-16m")}
              href={siteConfig.contact.email.href}
              target="_blank"
            >
              nhatnguyen.wk@gmail.com{" "}
            </a>
          </span>
        </div>
        <p className="flex gap-3 text-14r text-gravel-100">
          I hope to collaborate with you in the future.
          <img src="/footer/icons/rocket.svg" alt="" />
        </p>
      </div>
    </div>
  );
};

export default Footer;
