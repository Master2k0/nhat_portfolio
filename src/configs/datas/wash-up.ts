import { siteConfig } from "..";

export const WashUp = {
  breadCrumbHref: [
    siteConfig.pageList.home.href,
    siteConfig.pageList.projectHighlights.href,
    siteConfig.pageList.washUp.href,
  ],
  vehicleWashApp: {
    section1: {
      title: "Washup - Vehicle wash app",
      content: [
        "Washup is a mobile app that makes motorbike and car care effortless. Connect with top car wash services near you and book a wash anytime, anywhere, with just a few taps.",
        "For motorbike owners, Washup offers a unique feature: A specialized toolkit that allows technicians to wash motorbikes anywhere you want. This portable device, worn on the technician's back, uses just 2 litres of water and completes a wash in only 10 minutes.",
      ],
      img: "/vehicle-wash-app/images/vehicle-wash-app.webp",
    },
    section2: {
      title: "Identifying Users",
      content: [
        {
          icon: "/vehicle-wash-app/icons/yg-icon.svg",
          title: "Young - Generation",
          description:
            "Tech-savvy users appreciate apps that offer the convenience of on-demand carwash services.",
        },
        {
          icon: "/vehicle-wash-app/icons/bp-icon.svg",
          title: "Busy - Professionals",
          description:
            "Tech-savvy users appreciate apps that offer the convenience of on-demand carwash services.",
        },
        {
          icon: "/vehicle-wash-app/icons/f-icon.svg",
          title: "Families",
          description:
            "Tech-savvy users appreciate apps that offer the convenience of on-demand carwash services.",
        },
        {
          icon: "/vehicle-wash-app/icons/ft-icon.svg",
          title: "Frequent Travelers",
          description:
            "Frequent travellers need reliable cleaning and maintenance for their vehicles.",
        },
      ],
    },
    section3: {
      title: "Key features",
      content: [
        {
          icon: "/vehicle-wash-app/icons/eb-icon.svg",
          title: "Easy Booking",
          description:
            "Tech-savvy users appreciate apps that offer the convenience of on-demand carwash services.",
        },
        {
          icon: "/vehicle-wash-app/icons/rta-icon.svg",
          title: "Real-Time Availability",
          description:
            "Tech-savvy users appreciate apps that offer the convenience of on-demand carwash services.",
        },
        {
          icon: "/vehicle-wash-app/icons/sp-icon.svg",
          title: "Secure Payments",
          description:
            "Families with multiple cars require flexible services, including at-home mobile options.",
        },
        {
          icon: "/vehicle-wash-app/icons/rr-icon.svg",
          title: "Ratings & Reviews",
          description:
            "Frequent travellers need reliable cleaning and maintenance for their vehicles.",
        },
      ],
    },
    section4: {
      title: "User Journey",
      imgMobile: "/vehicle-wash-app/images/mobile-journey.png",
      imgPc: "/vehicle-wash-app/images/pc-journey.png",
    },
    section5: {
      title: "User Flow",
      img: "/vehicle-wash-app/images/user-flow.png",
    },
    section6: {
      title: "UI Design",
      img: "/vehicle-wash-app/images/ui-design.png",
    },
  },
};
