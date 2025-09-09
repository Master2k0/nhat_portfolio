import { siteConfig } from "@/configs"

const NotFound = () => {
  return (
    <div className="w-screen h-screen items-center justify-center flex flex-col">
      <img src="public/not-found.svg" alt="" />
      <p className="text-32b text-white-notfound mb-4">I'm still working on it</p>
      <p className="text-18r text-white-notfound">I know you want to look around, just give me a few more days to finish.</p>
      <a href={siteConfig.paths.home.href}
        className="text-18s text-black-notfound bg-gradient-new px-5 py-4 rounded-[8px] mt-8"
      >
        Back to Home
      </a>
    </div>
  )
}

export default NotFound
