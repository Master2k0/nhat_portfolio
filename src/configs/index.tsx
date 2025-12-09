import { ISidebarItem } from "@/types/config";

const SEO = {
  title: "@nhatnguyen",
  description: "@nhatnguyen",
  openGraph: {
    locale: "en_US",
    alternateLocale: ["vi_VN"],
    type: "website",
    siteName: "Bigboy Restaurant",
    images: [
      {
        url: `/banner.png`,
      },
    ],
  },
}

const contact = {
  linkedin: {
    href: "https://www.linkedin.com/in/nhatwork",
    as: "Linkedin",
  },
  email: {

    // href: "mailto:nhatnguyen.wk@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=nhatnguyen.wk@gmail.com",
    as: "nhatnguyen.wk@gmail.com",
  },
  behance: {
    href: "https://www.behance.net/nhat_nguyen_work",
    as: "Behance",
  },
  dribble: {
    href: "https://dribbble.com/nhatnguyen_wk",
    as: "Dribble",
  },
  resume: {
    href: "https://drive.google.com/file/d/1NtQrQSp3dCASxeqFD2CXemCV07IPNSOZ/view?usp=drive_link",
    as: "My Resume",
  },
}


const mainPage = {
  home: {
    href: "/",
    as: "Home",
  },
  about: {
    href: "/about-me",
    as: "About me",
  },
  projects: {
    href: "/projects",
    as: "Projects",
  },
  // insuranceFeature: {
  //     href: '/project-highlights/wash-up/insurance-feature',
  //     as: 'Washup - Insurance feature'
  // },
  // technicianApp: {
  //     href: '/project-highlights/wash-up/technician-app',
  //     as: 'Washup - Technician app'
  // },
  // technicianOrder: {
  //     href: '/project-highlights/wash-up/technician-order',
  //     as: 'Washup - Technician order'
  // },
  // vehicleWashApp: {
  //     href: '/project-highlights/wash-up/vehicle-wash-app',
  //     as: 'Washup - Vehicle wash app'
  // },
  setKey: {
    href: "/api/set-key",
    as: "Set Key",
  },
  notFound: {
    href: "*",
    as: "Not Found",
  },
}

export const subPage = {
  washUp: {
    href: "/projects/wash-up",
    as: "Wash Up",
  },
  circa: {
    href: "/projects/circa",
    as: "Circa",
  },
  dakoli: {
    href: "/projects/dakoli",
    as: "Dakoli",
  },
  cloakline: {
    href: "/projects/cloakline",
    as: "Cloakline",
  },
  vpBank: {
    href: "/projects/vp-bank",
    as: "VP Bank",
  },
  waveB: {
    href: "/projects/waveB",
    as: "Wave B",
  },
  vng: {
    href: "/projects/vng",
    as: "VNG",
  },
  thuocsi: {
    href: "/projects/thuoc-si",
    as: "Thuoc Si",
  },
  vpbank: {
    href: "/projects/vp-bank",
    as: "VP Bank",
  },


}

export const siteConfig = {
  seo: SEO,
  contact: contact,
  url: "http://jamesnguyendesign.com",
  mainPage: mainPage,
  subPage: subPage,
}

export const SidebarItems: ISidebarItem[] = [
  {
    id: "home",
    href: siteConfig.mainPage.home.href,
    name: "Home",

  },
  // {
  //   id: "otherProjects",
  //   href: siteConfig.pageList.otherProjects.href,
  //   name: "Other projects",

  // },
  {
    id: "about",
    href: siteConfig.mainPage.about.href,
    name: "About me",

  },
];
