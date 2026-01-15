export const CircaNew = {
  main: {
    section1: {
      title: "Circa - Medical Ecommerce",
      content: "How we launched an online pharmaceutical marketplace in just a few months",
      duration: "4 months",
      teams: ["1 Product Owner", "12 Engineers", "1 Designer"],
      img: "/circa/images/section-1.png",
      contributions: ["Desk Research", "Concepts & Ideation"],
    },
    section2: {
      title: "Overview",
      subContent: [
        {
          title: "Context",
          content: [
            "Circa is a startup developing <span class='text-white text-14s xl:text-18s'>an e-commerce marketplace for retail pharmaceuticals</span> and healthcare products. The project focuses on simplifying the medication purchasing process through a fast and clear ordering experience, with a long-term vision of expanding into <span class='text-white text-14s xl:text-18s'>pharmacist consultations and family prescription management.</span>",
          ],
          result:
            "The challenge was to deliver a fully functional retail platform within a four-month timeframe.",
          img: "/circa/images/section-2.png",
        },
        {
          title: "Problem Statement",
          mainContent:
            "The key challenge was ensuring the product went live on schedule while covering essential business processes. This included providing:",
          content: [
            "A comprehensive purchasing experience whether adding products directly to the cart or ordering based on uploaded prescriptions",
            "Enabling phone consultations with pharmacists to support assisted purchasing.",
            "Providing a basic order management tool that allows users to track and manage their orders after purchase.",
          ],
          result:
            "For the first MVP, the priority was to deliver a platform that could operate reliably, with other enhancements and optimizations planned for later phases.",
        },
      ],
    },
    section3: {
      title: "Constraints",
      subContent: [
        {
          title: "Limited user research:",
          content: [
            "Due to time and resource constraints, in-depth user research was not conducted. Instead, <span class='text-white text-14s xl:text-18s'>desk research</span> was conducted through <span class='text-white text-14s xl:text-18s'>competitive analysis</span> of platforms such as Long Chau and Pharmacity.",
            "With more time, I would conduct a large-scale survey to segment users based on their medication purchasing behaviors, combined with in-depth interviews to uncover their underlying needs and pain points.",
            "Additionally, usability testing would be essential to evaluate how effective the current operational flows are and to identify areas for improvement.",
          ],
        },
        {
          title: "Dependency on business decisions",
          content: [
            "While design decisions were largely guided by the CEO and Product Owner, I used desk research to independently analyze competitor approaches and understand the reasoning behind key decisions, ensuring the product was built with intention rather than blind imitation.",
            "However, I still aimed to adhere to <span class='text-white text-14s xl:text-18s'>Jakob Nielsen’s 10 Usability Heuristics</span> in my designs to ensure that the product met fundamental usability standards and delivered a solid baseline user experience.",
            "Through this phase, I also learned that <span class='text-white text-14s xl:text-18s'>user-centered design is not always the first priority</span> in early-stage products—establishing business viability is critical, and effective design requires balancing business goals, technical constraints, and user needs.",
          ],
        },
        {
          title: "Early-stage infrastructure",
          content: [
            "Technical capabilities were still evolving, requiring the design to stay within a stable and implementable scope.",
          ],
        },
      ],
    },
    section4: {
      title: "Research",
      content:
        "Due to time constraints typical of an early-stage startup, user research was not conducted. Instead, the project relied on <span class='text-white text-14s xl:text-18s'>desk research</span> and <span class='text-white text-14s xl:text-18s'>competitive analysis</span> to quickly identify industry patterns and establish a viable MVP.",
      content2:
        "The framework I used for competitor analysis was 5W1H, which involved asking questions",
      subContent2: [
        "Who is the primary user the platform is designed for?",
        "What core features support medication purchasing?",
        "When is user authentication required during the purchasing flow?",
        "Where do users start the purchasing flow (home, search, category)?",
        "How do users search and discover medications?",
      ],
      content3: "and so on...",
    },
    section5: {
      title: "Persona",
      content: [
        "Based on the research above, I formed the assumption that our primary users are young people living in Ho Chi Minh City with a relatively high level of technological proficiency.",
        "This assumption helped justify the decision to pursue a modern design concept, with a longer-term goal of enabling fast purchasing and reducing unnecessary steps in the user flow.",
      ],
      persona: {
        icon: "/circa/icons/lan-icon.svg",
        name: "MS. Lan Tran",
        info: "25/ Female /Marketing Executive",
        position: "High Tech Proficiency",
        LifestyleBehavior: [
          "Frequently shops online across multiple e-commerce platforms.",
          "Values convenience, speed, and seamless checkout experiences.",
          "Prefers mobile apps for shopping and payments.",
          "She occasionally buys health-related products for herself and her family.",
        ],
        NeedsPainPoints: [
          "Wants a quick and hassle-free medication ordering process.",
          "Prefers an intuitive app interface with fast search and checkout.",
          "Needs trusted product info and pharmacist support.",
          "Expect seamless payment and delivery tracking.",
        ],
      },
    },
    section6: {
      title: "Wireframe/ UserFlow ",
      content:
        "Based on the research above, I formed the assumption that our primary users are young people living in Ho Chi Minh City with a relatively high level of technological proficiency.",
      img: "/circa/images/section-6.png",
    },
    section7: {
      title: "APP UI Design",
      content:
        "Below is a collection of additional UIs to explain and complement some features you can explore. Thank you for taking the time to review this project! ~",
      listImages: [
        {
          title: "Log in_Home screens",
          imgs: [
            "/circa/images/section-7.1.png",
            "/circa/images/section-7.2.png",
            "/circa/images/section-7.3.png",
            "/circa/images/section-7.4.png",
            "/circa/images/section-7.5.png",
          ],
        },
        {
          title: "Product Detail",
          imgs: [
            "/circa/images/section-7.6.png",
            "/circa/images/section-7.7.png",
            "/circa/images/section-7.8.png",
          ],
        },
        {
          title: "Checkout",
          imgs: ["/circa/images/section-7.9.png", "/circa/images/section-7.10.png"],
        },
        {
          title: "Cart",
          imgs: ["/circa/images/section-7.11.png", "/circa/images/section-7.12.png"],
        },
        {
          title: "My Account/ My Orders/ Order Detail",
          imgs: [
            "/circa/images/section-7.13.png",
            "/circa/images/section-7.14.png",
            "/circa/images/section-7.15.png",
            "/circa/images/section-7.16.png",
          ],
        },
        {
          title: "Connection/ Member Profile",
          imgs: [
            "/circa/images/section-7.17.png",
            "/circa/images/section-7.18.png",
            "/circa/images/section-7.19.png",
          ],
        },
      ],
    },
    section8: {
      title: "WEB UI Design",
      content:
        "Due to NDA restrictions, I am unable to showcase the complete set of designs. The screens below represent a selection of key pages from the product I worked on.",
      listImages: [
        {
          title: "Homepage",
          img: "/circa/images/section-8.1.png",
        },
        {
          title: "Cart",
          img: "/circa/images/section-8.2.png",
        },
        {
          title: "Check Out",
          img: "/circa/images/section-8.3.png",
        },
        {
          title: "My Orders",
          img: "/circa/images/section-8.4.png",
        },
        {
          title: "Connection",
          img: "/circa/images/section-8.5.png",
        },
        {
          title: "Member Profile",
          img: "/circa/images/section-8.6.png",
        },
      ],
    },
  },
};
