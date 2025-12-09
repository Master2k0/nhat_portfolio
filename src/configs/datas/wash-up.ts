import { siteConfig } from "..";

export const WashUp = {
  breadCrumbHref: [
    siteConfig.mainPage.home.href,
    // siteConfig.pageList.projectHighlights.href,
    siteConfig.subPage.washUp.href,
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
  technicianApp: {
    section1: {
      pcTitle: "Washup - Technician app",
      title: "Technician app",
      content:
        "The application helps technicians manage remote orders, gather customer information, and proactively contact them before heading to the car wash location. Similar to ride-hailing apps, Washup’s order-receiving system works through random assignments within a radius, allowing technicians to accept or decline based on availability and proximity. Once an order is accepted, the technician receives a confirmation with order details and instructions.",
      img: "/technician-app/images/section1.png",
    },
    section2: {
      title: "Identifying Users",
      content: [
        {
          icon: "/technician-app/icons/wt-icon.svg",
          title: "Washup Technicians",
          description:
            "Washup technicians, equipped with tools, go to customer-specified locations to perform vehicle maintenance and cleaning per Washup standards.",
        },
        {
          icon: "/technician-app/icons/cmt-icon.svg",
          title: "Car maintenance technicians",
          description:
            "Staff at affiliated local centres handle orders, with customers bringing vehicles within 15m. Services are performed step by step per Washup standards.",
        },
      ],
    },
    section3: {
      title: "Key features",
      content: [
        {
          icon: "/technician-app/icons/ro-icon.svg",
          title: "Receive orders",
          description:
            "Technicians are assigned jobs based on distance and their feedback scores from previous tasks",
        },
        {
          icon: "/technician-app/icons/mt-icon.svg",
          title: "Manage tasks",
          description:
            "We provide features for managing jobs, including pending, in progress, completed, and cancelled jobs.",
        },
        {
          icon: "/technician-app/icons/ipft-icon.svg",
          title: "Instruct process for technicians",
          description:
            "Each order includes detailed instructions following Washup’s standards to ensure consistency.",
        },
        {
          icon: "/technician-app/icons/pft-icon.svg",
          title: "Pay for technician",
          description:
            "Completed tasks are carefully calculated to protect technicians' rights, with payment based on the fee schedule.",
        },
      ],
    },
    section4: {
      title: "User Journeys",
      imgMobile: "/technician-app/images/user-journey-mobile.png",
      imgPc: "/technician-app/images/user-journey-pc.png",
    },
    section5: {
      title: "User Flow",
      img: "/technician-app/images/user-flow.png",
    },
    section6: {
      title: "Task Reception UI",
      description:
        "Below are user interfaces that provide an overview of the order entry process for technicians. They guide technicians through steps like activating availability, reviewing orders, and managing order status, streamlining the workflow and improving efficiency.",
      content: [
        {
          description: [
            'The technician activates the <span class="text-gravel-25 xl:text-18s text-10m">"Ready to Wash"</span> toggle in the app, signaling their availability to accept new orders. Once activated, the system notifies them when a nearby customer places a request, allowing the technician to review the details and prepare for the job.',
          ],
          img: "/technician-app/images/phone-1.webp",
        },
        {
          description: [
            `When a job comes in, a pop-up notification appears on the technician's screen with key details <span class="text-gravel-25 xl:text-18s text-10m"> such as the customer's location, vehicle type, and requested services. </span>`,
            "Technicians can choose to accept the order immediately if they are ready, or temporarily set it to pending, giving them time to assess their availability before making a decision. This provides flexibility and allows technicians to manage their workload efficiently.",
          ],
          img: "/technician-app/images/phone-2.webp",
        },
        {
          description: [
            `The order will be placed in the queue if the technician clicks the <span class="text-gravel-25 xl:text-18s text-10m">"Later"</span> button. However, if a technician has already accepted the order, it will be immediately removed from the queue of other technicians.`,
          ],
          img: "/technician-app/images/phone-3.webp",
        },
        {
          description: [
            "Once the technician has accepted an order, the queue will display only the accepted order. The technician will not be able to receive another job until the current task is completed.",
          ],
          img: "/technician-app/images/phone-4.webp",
        },
      ],
    },
    section7: {
      title: "Import Order UI",
      content:
        "Technicians can also proactively receive a specific order directly from a customer by scanning the QR code in the customer's order details or by clicking the “Import order” button and entering the Order ID.",
      img: "/technician-app/images/final-design-2.png",
    },
  },
  technicianTask: {
    section1: {
      pcTitle: "Washup - Technician task",
      title: "Technician task",
      content:
        "To standardize service quality, technicians follow a set of instructions for each task and capture evaluation photos for their performance records.",
    },
    section2: {
      title: "Some UX points",
      content:
        "To standardize service quality, technicians follow a set of instructions for each task and capture evaluation photos for their performance records.",
      endContent:
        "Moreover, to be able to accept orders, the technician must scroll to the bottom of the screen and click the 'Start' button. This ensures that they review the information at least once.",
      description: {
        title: "Device information",
        content: [
          "We aim to develop a device management solution to track usage and identify damage by scanning QR codes for each device.",
          "At the time I design this stuff, scanning QR codes was not required. Therefore, I was asked to add an option for technicians to manually turn the device on or off while still encouraging the use of the QR code.",
          "Hence, my proposed design solution makes QR code scanning the default option. If a technician prefers to switch to manual control, they must open a pop-up and make a selection. This approach increases the number of steps required for manual control, thereby promoting the default QR code option.",
        ],
        img: [
          "/technician-task/images/desk-device-info.png",
          "/technician-task/images/mobile-right.png",
          "/technician-task/images/some-ux-points.png",
        ],
      },
    },
    section3: {
      title: "Conclusion",
      description:
        "The next steps involve the execution of the car wash process. However, there are no notable points as the feature is relatively straightforward and primarily aimed at system control and operation. In addition, to ensure the confidentiality of the project, I will not show the full user interface for these steps.",
    },
  },
};
