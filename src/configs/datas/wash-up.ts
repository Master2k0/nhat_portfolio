import { siteConfig } from "..";

export const WashUp = {
  breadCrumbHref: [
    siteConfig.pageList.home.href,
    siteConfig.pageList.projectHighlights.href,
    siteConfig.pageList.washUp.href,
  ],
  vehicleWashApp: {
    section1: {
      title: "Vehicle wash app",
      pcTitle: "Washup - Vehicle wash app",
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
  insuranceFeature: {
    section1: {
      pcTitle: "Washup - Insurance Feature",
      title: "Insurance Feature",
      content: [
        "The goal is to expand the platform's reach and make it easier for users to buy and manage insurance.",
        "The vehicle insurance feature lets users buy and manage motorcycles or car insurance directly in the app. Unlike other apps that require code checks on websites or emails, our feature simplifies access to insurance records without searching or remembering contract codes.",
        "If you're pulled over on the highway by traffic police and asked for your vehicle's insurance information, would it be easier to find it through multiple emails or an app?",
      ],
    },
    section2: {
      title: "Key Features",
      content: [
        {
          icon: "/insurance-feature/icons/i-icon.svg",
          title: "Purchase Insurance Package",
          description:
            "Discover the benefits of our comprehensive vehicle insurance packages, select the one you need, provide the information required to take out a policy and pay quickly.",
        },
        {
          icon: "/insurance-feature/icons/f-icon.svg",
          title: "Insurance Contract Management",
          description:
            "Designed for ease of use, our application includes a feature that allows users to manage purchased insurance packages, easily access and retrieve digital legal documents.",
        },
      ],
    },
    section3: {
      title: "User Flow",
      img: "/insurance-feature/images/in.png",
    },
    section4: {
      title: "Problems and Solutions",
      content: [
        {
          problem:
            "The first issue was to enhance customer confidence in the platform. We recognised that the existing application lacked a clear market position and that customers might be reluctant to spend their money on purchasing our insurance.",
          solution:
            "In the initial phase, users are presented with <span class='text-yellow text-14m'>a pop-up summary of benefits, costs, and reasons</span> for purchasing insurance. Users can easily understand the insurance package. Before purchasing, they need to review key details such as <span class='text-yellow text-14m'>indemnity costs</span> and <span class='text-yellow text-14m'>terms</span>. To improve readability, the information is divided into sections with clear line breaks. After understanding the details, users confirm and proceed to purchase.",
          img: "/insurance-feature/images/phone-1.png",
        },
        {
          problems: [
            {
              title: "Authenticity of information",
              description:
                "In creating an insurance policy, gathering essential information and developing a comprehensive form may require further validation and refinement to ensure accuracy.",
            },
            {
              title: "Distribution of information fields",
              description:
                "The insurance form interface has too many fields, making it challenging to review. Additional improvements are needed to enhance usability and better organize key sections like Coverage Period, Contact Details, and Vehicle Information.",
            },
          ],
          solutions: [
            {
              title: "Authenticity of information",
              description:
                "To ensure accuracy and suitability, further guidance and adjustments from partnering insurance companies are needed, as the current data serves as a reference based on publicly available online documents.",
            },
            {
              title: "Distribution of information fields",
              description:
                "To improve the insurance form interface, I reduced the number of fields and grouped related sections, such as Period of Insurance, Contact Details, and Vehicle Information, for easier review and usability.",
            },
          ],
          img: "/insurance-feature/images/phone-2.2.png",
        },
        {
          problem:
            "Despite the minor UI changes in the second solution, the form page still did not receive much positive feedback. Users still had difficulty reviewing and editing sections, suggesting that more efficient solutions were needed.",
          solution:
            "So - When the user completes any section, it collapses for easy review and when you want to edit? Just click on the pencil icon. ",
          imgMobile: "/insurance-feature/images/phone-3-mobile.png",
          imgPc: "/insurance-feature/images/phone-3-pc.png",
        },
      ],
      end: {
        title: "Problem with a progress bar ",
        description1:
          "Moreover - We’ve added a progress bar at the top to visually indicate that the user's request is being processed. It provides updates on progress, estimated time, and active execution status.",
        description2:
          "I expected the progress bar to be more intuitive, clearly showing the duration of each step. However, due to the project's urgency and limited staff, the CTO chose a simpler design (as shown above).",
        img1: "/insurance-feature/images/phone-3.2.png",
        img2: "/insurance-feature/images/phone-3.3.png",
      },
    },
    section5: {
      title: "User Contracts",
      description:
        "The insurance management feature prioritizes easy access, a user-friendly interface, quick search tools, and automatic renewal reminders for maximum customer convenience. Below is a summary table showcasing the details of the Insurance Package, coverage period, owner information, and insured vehicle details.",

      content: [
        {
          img: "/insurance-feature/images/contract-1.png",
        },
        {
          list: ["Pending", "Unpaid", "Active", "Nearly-Expired", "Expire"],
          description:
            'The "Status" section provides detailed information about the current condition or progress of the insurance package you have signed up for, including whether it is active, expired, pending, or otherwise.',
        },
        {
          title: "A summary section displaying the following information:",
          list: [
            "Details of the Insurance Package",
            "Coverage period",
            "Information about the Insurance ",
            "Package owner",
            "Details of the insured vehicle",
          ],
        },
      ],
      img: "/insurance-feature/images/phone-contract.png",
    },
    section6: {
      title: "Conclusion",
      content:
        "The app's insurance features enable users to buy and manage policies with ease, offering tools for research, informed decisions, real-time support, and renewal reminders. These features streamline the process, reduce time, and improve accessibility, making insurance management efficient and user-friendly while fostering better customer-insurer interactions.",
    },
  },
};
