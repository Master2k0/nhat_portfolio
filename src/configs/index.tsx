import { ISidebarItem } from "@/types/config";

export const siteConfig = {
  seo: {
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
  },
  paths: {
    home: {
      href: "/",
      as: "Home",
    },
    caseStudies: {
      href: "/case-studies",
      as: "Case Studies",
    },
    about: {
      href: "/about",
      as: "About",
    },
  },
  contact: {
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
  },
  url: "http://jamesnguyendesign.com",
  mobileWidth: "(max-width: 640px)",
  pageList: {
    home: {
      href: "/",
      as: "Home",
    },
    otherProjects: {
      href: "/other-projects",
      as: "Other projects"
    },
    caseStudies: {
      href: "/case-studies",
      as: "Case Studies",
    },
    vpBank: {
      href: "/other-projects/vp-bank",
      as: "VP Bank",
    },
    waveB: {
      href: "/other-projects/waveB",
      as: "Wave B",
    },
    about: {
      href: "/about-me",
      as: "About me",
    },
    projectHighlights: {
      href: "/project-highlights",
      as: "Project Highlights",
    },
    washUp: {
      href: "/other-projects/wash-up",
      as: "Wash Up",
    },
    circa: {
      href: "/other-projects/circa",
      as: "Circa",
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
    dakoli: {
      href: "/dakoli",
      as: "Dakoli",
    },
    cloakline: {
      href: "/other-projects/cloakline",
      as: "Cloakline",
    },
    setKey: {
      href: "/api/set-key",
      as: "Set Key",
    },
    notFound: {
      href: "*",
      as: "Not Found",
    },
  },
};

export const SidebarItems: ISidebarItem[] = [
  {
    id: "home",
    href: siteConfig.pageList.home.href,
    name: "Home",

  },
  // {
  //   id: "otherProjects",
  //   href: siteConfig.pageList.otherProjects.href,
  //   name: "Other projects",

  // },
  {
    id: "about",
    href: siteConfig.pageList.about.href,
    name: "About me",

  },
];
