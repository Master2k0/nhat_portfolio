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
      teams: ["1 PM", "1 BA", "6 Engineers", "1 Designer"],
      contributions: ["User Research", "Ideation", "Usability Test"],
    },
    section2: {
      title: "Context",
      content: [
        "The Postal Tool is an internal service that allows VNG employees to send packages and documents to customers and partners, both domestically and internationally. The basic operational workflow is outlined below.",
        "This project focuses on improving the <span class='text-gravel-100 text-14s xl:text-18s'>domestic shipping</span> experience for <span class='text-gravel-100 text-14s xl:text-18s'>senders.</span>",
      ],
      img1: "/vng/images/section-2.1.png",
      content2:
        "Unlike other delivery platforms, this internal tool allows a sender to create an order for multiple recipients with different types of items simultaneously. However, the tool often overloads because multiple teams create orders at the same time on a single postal computer.",
      img2: "/vng/images/section-2.2.png",
      img2small: "/vng/images/section-2.3.png",
      businessGoal: {
        title: "Business goal:",
        content:
          "Reduce overload and improve performance without changing workflows or adding infrastructure costs.",
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
          "Shipping tickets must be created at the Postal office, where a single computer causes congestion during peak times.",
          "Users often log in to Zalo to create shipping tickets and forget to log out afterward.",
          "Users must request bubble wrap directly from the postman, as the tool does not support this option.",
          "Users must photograph the order code and track the shipment later on the carrier’s website.",
          "Shipping costs are billed to the sender’s department, but users often select the wrong one.",
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
          "After evaluation, we found users don’t need to visit the Postal office to create tickets. Instead, <span class='text-white text-14s xl:text-18s'>they can submit an eForm via the myVNG platform</span>, which consolidates all company eForms.",
          "The eForm can include shipping info and pricing, helping users plan their budget. After submitting the eForm, users can print labels on-site using printers placed in each area.",
        ],
        imgs: ["/vng/images/section-4.1.png", "/vng/images/section-4.2.png"],
      },
      manage: {
        title: "How to help user manage their order?",
        content: [
          "Evaluation shows the old order management tool works reasonably well, but order status doesn’t match the delivery process, and the interface feels outdated.",
          "Thus, we focused on improving the order status system and modernizing the interface, with minor adjustments to other components as needed.",
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
        "Ideally, usability testing follows wireframing, but due to stakeholder demands for early design delivery, I completed the UI first and tested usability on the final screens.",
      imgs: [
        "/vng/images/section-5.1.png",
        "/vng/images/section-5.2.png",
        "/vng/images/section-5.3.png",
      ],
      planning: {
        title: "Planning",
        content:
          "Before testing, I defined evaluation criteria for this feature, with the primary goal of ensuring users could complete the shipping process end to end. The criteria are shown in the table below:",
        img: "/vng/images/section-5.4.png",
      },
      result: {
        title: "Result",
        content: [
          "<span class='text-white text-14s xl:text-18s'>Usability tests revealed a critical issue:</span> <br/> All users dropped off at Task 3, unsure what to do after submitting the eForm and printing the label.",
          "Observations showed that users often skipped the confirmation page instructions and immediately clicked Print Label after submitting the form, rarely paying attention even after multiple attempts.",
          "<span class='text-white text-14s xl:text-18s'>Solution:</span> </br> To address this issue in the simplest way, we placed a Postal instruction sign next to each printer. Surprisingly, this low-effort solution proved to be effective.",
        ],
        imgs: [
          "/vng/images/section-5.5.png",
          "/vng/images/section-5.6.png",
          "/vng/images/section-5.7.png",
        ],
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
