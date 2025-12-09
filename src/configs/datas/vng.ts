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
      content: [
        "VNG’s internal shipping service supports the delivery of parcels and work-related documents to partners, clients, or VNG offices across Vietnam.",
        "The goal of this project is to identify pain points in the current tool and enhance the shipping experience for employees at VNG Campus.",
      ],
      img: "/vng/images/section-1.png",
      durations: "2 months",
      teams: ["1BA - 1PM", "1 Designer", "6 Engineers"],
      contributions: ["User Research", "Concepts & Ideation", "Usability Test"],
    },
    section2: {
      title: "Context",
      content: [
        "Below is a diagram illustrating the workflow of VNG’s internal shipping process:",
        "The operations team, which manages the tool, wants to improve the current system because it is outdated and frequently malfunctions, causing workflow disruptions.",
      ],
      businesGoal:
        "The operations team wants the upgrade to follow the current workflow, and hardware changes are not prioritized due to budget limits.",
      img: "/vng/images/section-2.png",
    },
    section3: {
      title: "Research Activities",
      content:
        "Using the data provided by the operations team, our team verified the issue with users. Then, we explored any additional unreported pain points and developed strategies to address them effectively.",
      conducted: [
        "<span class='text-yellow text-14s xl:text-16s'>Direct observation</span> of employees using the old system.",
        "<span class='text-yellow text-14s xl:text-16s'>Quick on-site interviews</span> with both employees (10 users) and the postman, with representative questions as follows:",
      ],
      conductedSub: [
        "What needs drive you to use the internal shipping service?",
        "During use, do you experience any difficulties with …?",
        "How do you think your experience could be improved if the service had additional features ?",
      ],
      keyFindings: [
        {
          img: "/vng/images/section-3.1.png",
          title: "10/10",
          content:
            "Users reported <span class='text-yellow text-14s xl:text-16s'>that the system frequently malfunctions</span>, and the label printer in use is old, slow, and prone to minor issues.",
        },
        {
          img: "/vng/images/section-3.2.png",
          title: "9/10",
          content:
            "Users reported that to upload files, they must log in with personal Zalo accounts on shared computers, and sometimes forget to log out, which <span class='text-yellow text-14s xl:text-16s'>risks exposing their information.</span>",
        },
        {
          img: "/vng/images/section-3.3.png",
          title: "6/10",
          content:
            "The ticket form is easy to fill out, but the required fields are not marked, causing users to check multiple times.",
        },
        {
          img: "/vng/images/section-3.4.png",
          title: "6/10",
          content:
            "Users reported that only 1 shared computer, causing <span class='text-yellow text-14s xl:text-16s'>long queues during peak hours.</span>",
        },
        {
          img: "/vng/images/section-3.5.png",
          title: "5/10",
          content:
            "<span class='text-yellow text-14s xl:text-16s'>The flow lacks clear instructions</span>, making it difficult for new employees to send packages.",
        },
        {
          img: "/vng/images/section-3.6.png",
          title: "4/10",
          content:
            "Users <span class='text-yellow text-14s xl:text-16s'>cannot track shipment status or register for additional services</span>, such as shockproof wrapping or declaring the value of their goods.",
        },
      ],
      hmw: "How might we enhance the postal experience while keeping the existing workflow intact and without relying on hardware upgrades?",
    },
    section4: {
      title: "Ideation",
      content:
        "After analysis, we found that the service experience was largely concentrated in the Postal room, where capacity and equipment could not meet high demand. Therefore, we decided to move the process to users’ personal devices.",
      img: "/vng/images/section-4.1.png",
      belowContent: "The overall solution consists of three main components:",
      subContents: [
        {
          index: "01",
          contents: [
            "Users can now fill out shipping form on their own devices and print labels at the nearest printer.",
            "Then, they only need to bring the packaged and labeled parcels to the Postal room for delivery.",
          ],
          img: "/vng/images/section-4.2.png",
        },
        {
          index: "02",
          contents: [
            "At the Postal Room, shipper has a computer to access a platform called the VNG Kiosk.",
            " It allows him to see how many orders need to be picked up, which orders have been picked or canceled, and even retrieve the history of previous orders.",
          ],
          img: "/vng/images/section-4.3.png",
        },
        {
          index: "03",
          contents: [
            "In addition, senders will have a page to manage their orders with complete information and status, supporting end-of-month review and data audits.",
          ],
          img: "/vng/images/section-4.4.png",
        },
      ],
    },
    section5: {
      title: "Concept Validation",
      content:
        "After confirming the most feasible direction, we moved straight into designing the initial UI screens to save time, and only then conducted <span class='text-yellow text-14s xl:text-16s'>usability testing</span> to assess how well the solution would address the problem in practice.",
      imgs: [
        "/vng/images/section-5.1.png",
        "/vng/images/section-5.2.png",
        "/vng/images/section-5.3.png",
      ],
      imgs2: ["/vng/images/section-5.4.png", "/vng/images/section-5.5.png"],
    },
    section6: {
      title: "Final Design",
      content:
        "Based on the results, we refined the broken points in the flow and incorporated user feedback to produce the final polished UI as follows:",
      imgs: [
        "/vng/images/section-6.1.png",
        "/vng/images/section-6.2.png",
        "/vng/images/section-6.3.png",
      ],
    },
  },
};
