import { siteConfig } from "..";

export const DataHome = {
  banner: {
    name: "Nhat Nguyen",
    position: "Product Designer",
    description:
      "+3 years of experience in pampering users, delivering solutions tailored to the demanding requirements of businesses, and actively persuading developers to go the extra mile to enhance the user experience.",
    img: "/home-new/images/img-banner.png",
  },
  timeline: [
    {
      startDate: "03/2025",
      endDate: "Now",
      title: "Product Designer at",
      company: "VNG Corporation",
      details: [
        "Conducted research by analyzing client needs and interviewing users to gather insights, then proposed feature solutions for development on myVNG.",
        "Collaborated with cross-functional teams to identify solutions that balance user experience, business goals, and technical feasibility.",
        "Conducted usability tests to evaluate solution effectiveness and implemented improvements accordingly.",
        "Maintained and evolved the Design System using existing data, while creating documentation to ensure all components complied with accessibility and compatibility standards.",
      ],
      links: [
        {
          img: "/home-new/images/vng.png",
          href: "/project-highlights/vng",
          title: "MyVNG - POSTAL TOOL",
          content: "Project to improve the current shipment and order management process.",
        },
      ],
      active: true,
    },
    {
      startDate: "10/2024",
      endDate: "03/2025",
      title: "Freelancer at",
      company: "ZTECH",
      details: [
        "Implement a few “instant noodle” apps to meet customer demand for production volume.",
        "Conduct desk research on competitors in the market to develop applications quickly and save time.",
        "Collaborated with the Dev team to make adjustments aligned with technical requirements.",
      ],
      links: [],
      active: false,
    },
    {
      startDate: "10/2022",
      endDate: "11/2024",
      title: "UX/UI Designer at",
      company: "BUYMED",
      details: [
        "Contributed to the development and design of core features for two pharmaceutical e-commerce platforms (B2B and B2C).",
        "Collaborated closely with BAs and Developers to deliver solutions that balanced user experience with business goals and technical requirements.",
        "Built and maintained a design system to ensure consistency across the ecosystem and shorten product development time.",
      ],
      links: [
        {
          img: "/home-new/images/circa.png",
          href: "/project-highlights/circa",
          title: "CIRCA - B2C Medical Ecommerce",
          content:
            "E-commerce platform specializing in retail distribution of pharmaceutical products.",
        },
        {
          img: "/home-new/images/thuoc-si.png",
          href: "",
          title: "THUOCSI - B2B Medical E-Commerce",
          content:
            "Platform specializing in wholesale distribution of pharmaceutical products to pharmacies.",
        },
      ],
      active: false,
    },
    {
      startDate: "06/2022",
      endDate: "10/2022",
      title: "UX/UI Design Intern at",
      company: "USUM Software",
      details: [
        "Collaborate with other Designers by co-designing or helping with tasks.",
        "Participate in building a management system for the Dakoli e-commerce platform",
        "Create dashboards for data and performance analysis of the Dakoli platform.",
      ],
      links: [
        {
          img: "/home-new/images/dakoli.png",
          href: "/project-highlights/dakoli",
          title: "DAKOLI PROJECT",
          content:
            "Your go-to platform for businesses and customers to shop a variety of products easily.",
        },
      ],
      active: false,
    },
  ],
};

export const DataHomeV3 = {
  banner: {
    name: "Nhat Nguyen",
    position: "Product Designer",
    description:
      "+3 years of experience in pampering users, delivering solutions tailored to the demanding requirements of businesses, and actively persuading developers to go the extra mile to enhance the user experience.",
    img: "/home-new/images/img-banner.png",
  },
  projects: [
    {
      img: "/home-new/images/urbox.png",
      href: siteConfig.subPage.urBox.href,
      title: "UrBox - UX Research",
      content:
        "How can I optimize the “Redeem Rewards” page for users who prefer exploring rather than searching?",
      active: false,
    },
    {
      img: "/home-new/images/vng.png",
      href: siteConfig.subPage.vng.href,
      title: "MyVNG - POSTAL TOOL",
      content: "Project to improve the current shipment and order management process.",
      active: true,
    },
    {
      img: "/circa/images/section-1.png",
      href: siteConfig.subPage.circa.href,
      title: "CIRCA - B2C Medical Ecommerce",
      content:
        "E-commerce platform specializing in retail distribution of pharmaceutical products.",
      active: true,
    },
    {
      img: "/home-new/images/thuoc-si.png",
      href: siteConfig.subPage.thuocsi.href,
      title: "THUOCSI - B2B Medical E-Commerce",
      content:
        "Platform specializing in wholesale distribution of pharmaceutical products to pharmacies.",
      active: false,
    },
    {
      img: "/home-new/images/vp-bank.png",
      href: siteConfig.subPage.vpbank.href,
      title: "VP Bank App -  UX problems",
      content:
        "I challenged myself to analyze UX improvements in the payroll banking app my company uses.",
      active: false,
    },
    {
      img: "/home-new/images/dakoli.png",
      href: siteConfig.subPage.dakoli.href,
      title: "DAKOLI PROJECT",
      content:
        "Your go-to platform for businesses and customers to shop a variety of products easily.",
      active: true,
    },
    {
      img: "/home-new/images/waveB.png",
      href: siteConfig.subPage.waveB.href,
      title: "WaveB - Blockchain Platform",
      content: "My first project to kickstart my journey into the /n Product Design industry.",
      active: false,
    },
  ],
};
