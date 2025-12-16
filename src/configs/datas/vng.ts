import { siteConfig } from "..";

export const VNG = {
  breadCrumbHref: [
    siteConfig.mainPage.home.href,
    // siteConfig.pageList.caseStudies.href,
    siteConfig.subPage.waveB.href,
  ],
  main: {
    section1: {
      title: "MyVNG - POSTAL TOOL",
      content:
        "How we upgraded the postal tool to reduce overload and help users manage orders better",
      img: "/vng/images/section-1.png",
      durations: "2 months",
      teams: ["1BA - 1PM", "1 Designer", "6 Engineers"],
      contributions: ["User Research", "Concepts & Ideation", "Usability Test"],
    },
    section2: {
      title: "Context",
      content: [
        "The Postal Tool is an internal service that allows VNG employees to send packages and documents to customers and partners, both domestically and internationally. The basic operational workflow is outlined below.",
        "In this project,<span class='text-yellow text-14m xl:text-18m'>our scope focused on</span> improving the experience for <span class='text-yellow text-14m xl:text-18m'>Senders</span>",
      ],
      img1: "/vng/images/section-2.1.png",
      content2:
        "Unlike other delivery platforms, this internal tool allows a sender to create an order for multiple recipients with different types of items simultaneously.",
      img2: "/vng/images/section-2.2.png",
      content3:
        "However, according to the service management team, the current tool frequently experiences overloads and errors. This is because multiple event teams often need to send items simultaneously, but orders can only be created on a single fixed computer in the postal room.",
      businessGoal: {
        title: "Business goal from the operation team:",
        content:
          "Resolve service overloads and improve system performance while adhering to the existing workflow and avoiding additional infrastructure costs.",
      },
    },
    section3: {
      title: "Research Activities",
      content:
        "After gathering the management team's requirements, I conducted research on the issues faced by end users using two methods:",
      interviews: {
        title: "Quick on-site interviews",
        content: {
          header: "Through short survey sessions with:",
          list: [
            [8, "frequent users"],
            [2, "infrequent or non-users"],
            [1, "postman"],
          ],
        },
        subContent:
          "I observed that most users complained about <span class='text-white text-14m xl:text-18m'>the outdated printer</span>, which significantly slowed down the printing process. In addition, infrequent users <span class='text-white text-14m xl:text-18m'>lacked clear usage instructions</span>. However, I did not believe these were the only issues users were facing, so I proceeded with the next research method.",
      },
      observation: {
        title: "Direct observation",
        content:
          "I spent one week observing and documenting user behavior throughout the parcel drop off process and summarized the key insights as follows:",
        subContents: [
          "Users must go to the Postal office to create shipping labels, and when many people arrive at the same time, a single computer is insufficient.",
          "Users often have to log in to Zalo in order to send parcels and frequently forget to log out afterward.",
          "If users want bubble wrap for fragile items, they must inform the postman directly, as the tool does not support this option.",
          "To track the shipment later, users have to take a photo of the order code at creation and then check its status on the carrier’s website.",
          "Shipping costs are charged to the sender’s department; however, users rarely select the correct department when creating a shipment.",
        ],
      },
      img: "/vng/images/section-3.png",
      hmw: {
        title: "HMW",
        content:
          "How might we reduce system overload and improve the user experience from order creation to delivery, while staying aligned with the existing workflow and minimizing infrastructure costs?",
      },
    },
    section4: {
      title: "Ideation",
      ticketEasier: {
        title: "How to submit ticket easier?",
        content: [
          "After evaluation, we realized that users do not necessarily need to go to the Postal office to create a ticket. Instead, <span class='text-white text-14m xl:text-18m'>the process can be shifted to submitting an eForm</span>, since we already have the myVNG platform that consolidates all company eForms.",
          "The eForm can also include all the information users need, such as shipping service pricing, enabling them to better plan and manage their budget.",
          "Additionally, after submitting the eForm,<span class='text-white text-14m xl:text-18m'> users can print the shipping label at their desks</span>, as printers are available throughout the office.",
        ],
        imgs: ["/vng/images/section-4.1.png", "/vng/images/section-4.2.png"],
      },
      manage: {
        title: "How to help user manage their order?",
        content: [
          "Based on our evaluation, the existing tool handled order management reasonably well. However, the order status did not accurately reflect the actual delivery workflow, and the interface felt outdated.",
          "Therefore, our improvement efforts focused primarily on refining the order status system and modernizing the user interface, while making minor adjustments to other components where necessary.",
        ],
        img: "/vng/images/section-4.3.png",
      },
      wireframing: {
        title: "Then we moved on to wireframing",
        imgs: ["/vng/images/section-4.4.png", "/vng/images/section-4.5.png"],
      },
    },
    section5: {
      title: "Testing",
      content:
        "Ideally, usability testing should have been conducted immediately after the wireframing stage. However, due to stakeholder requirements for an early design delivery, I proceeded with UI design first. Usability testing was then conducted based on the finalized UI screens.",
      imgs: [
        "/vng/images/section-5.1.png",
        "/vng/images/section-5.2.png",
        "/vng/images/section-5.3.png",
      ],
      planning: {
        title: "Planning",
        content:
          "Based on our evaluation, the existing tool handled order management reasonably well. However, the order status did not accurately reflect the actual delivery workflow, and the interface felt outdated.",
        img: "/vng/images/section-5.4.png",
      },
      result: {
        title: "Result",
        content: [
          "The usability test results revealed a critical issue: all users dropped off at Task 3. After submitting the eForm and printing the label, users were unsure of what to do next.",
          "During testing, we observed that after submitting the form, users consistently skipped the instructions on the confirmation page and immediately clicked Print Label. Even after multiple test rounds, users rarely paid attention to the instructional content on this page.",
        ],
        imgs: ["/vng/images/section-5.5.png", "/vng/images/section-5.6.png"],
      },
      solution: {
        title: "Solution",
        content:
          "To address this issue in the simplest way, we placed a Postal instruction sign next to each printer. Surprisingly, this low-effort solution proved to be effective.",
        img: "/vng/images/section-5.7.png",
      },
    },
    section6: {
      title: "Final Design",
      content:
        "Due to NDA restrictions, I am unable to showcase the complete set of designs. The screens below represent a selection of key pages from the product I worked on.",
      subContent: [
        {
          title: "Shipping eForm:",
          img: "/vng/images/section-6.1.png",
        },
        {
          title: "Add recipient:",
          img: "/vng/images/section-6.2.png",
        },
        {
          title: "Manage order:",
          img: "/vng/images/section-6.3.png",
        },
      ],
    },
  },
};
