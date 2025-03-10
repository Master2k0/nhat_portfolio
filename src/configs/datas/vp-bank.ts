import { siteConfig } from "..";

export const VPBank = {
  breadCrumHref: [
    siteConfig.pageList.home.href,
    siteConfig.pageList.caseStudies.href,
    siteConfig.pageList.vpBank.href,
  ],
  main: {
    section1: {
      pcTitle: "VP App UX Issues",
      mainTitle: "Case Studies",
      subTitle: "VP App UX Issues",
      content:
        "On a lazy day, I decided to explore the VP Bank app and stumbled upon the loans feature, which I thought had great potential for development. However, it has not yet received the attention it deserves. So I set some hypothetical goals and created mock customer feedback to establish a baseline for improving both the UI and UX of this feature.",
      img: "/vpbank/images/section-1.png",
    },
    section2: {
      title: "Hypothetical case",
      content: [
        "I assume that VPBank is a leading financial institution in Vietnam, holding the second-largest market share in unsecured personal loans. The goal for the next 6 months is to <span class='text-yellow text-14m xl:text-18b'>become the market leader in lending and reach more customers, from urban to rural areas, across various age groups.</span>  Based on these expectations, I divided them into two main goals.",
        "Based on the established business goal, I proceeded to break it down into smaller tasks that needed to be improved in the lending feature of the app (I will occasionally refer to the desktop version as well, but we will only touch on it briefly and not go into detail).",
      ],
      group1: {
        icon: "/vpbank/images/section-2.1.png",
        title: "Business goal",
        content: "To become the market leader",
        subContent: [
          "Provide a seamless, unique omnichannel experience.",
          "Ensure seamless integration with new providers.",
          "Launch a new version within 6 months on web/ mobile.",
          "Allow flexibility for future feature development.",
        ],
      },
      content2:
        "On the other hand, based on personal experiences with this feature, as well as conducting a quick survey with a sample of 8 volunteers from my town, I have summarized 4 main issues that users face when interacting with the feature, which directly impact the goal of reaching the mass market.",
      group2: {
        icon: "/vpbank/images/section-2.2.png",
        title: "Target customer",
        content: "60% urban / 40% rural / 20-50 yo ",
        subContent: [
          "Struggling to access loans.",
          "Too few accessible loan options.",
          "Timely loan payment process.",
          "User interface is difficult to use.",
        ],
      },
    },
    section3: {
      title: "Problem Analysis",
      content: [
        "In this section, I will group the user feedback into one main issue called the <span class'text-gravel-25 text-14m xl:text-18m'>“Challenges in Reaching the Mass Market”</span> while the other issues related to the business goal will be allocated accordingly based on the order of the 4 issues mentioned above.",
        "For each issue, I will propose a few preliminary solutions to address the current problems of the feature. Please take a look and see if they make sense!",
      ],
      datas: [
        {
          title: "Challenges in Reaching the Mass Market",
          content: [
            "Simplify the UI to make it more accessible for less tech-savvy users, enhancing mass market reach.",
            "Expand support channels to ensure rural users have access to sufficient assistance.",
            "Ensure consistent compatibility across devices and optimize the interface for small screens to improve usability on different devices and operating systems.",
          ],
        },
        {
          title: "Provide a seamless, unique omnichannel experience",
          content: [
            "Data synchronization between platforms (web and mobile) is necessary to ensure consistency throughout the UX.",
            "Careful consideration should be given to necessary and unnecessary features to avoid optimizing only for the web while overloading the app platform.",
            "User interactions should be seamlessly synchronized.",
          ],
        },
        {
          title: "Ensure seamless integration with new providers",
          content: [
            "Simplify the integration process to enable easy onboarding of new vendors.",
            "Security is a top priority to ensure trust and reliability.",
            "Always prepared to provide technical support to partners.",
          ],
          end: "Ensure product-partner compatibility with clear agreements, evaluate partners pre-integration, and monitor for issues during the process.",
        },
        {
          title: "Launch a new version within 6 months on web/ mobile",
          content: [
            "Collect and analyze customer feedback on the loan application feature in the current version.",
            "Prioritize improvements as 'Urgent,' 'High,' 'Medium,' or 'Low,' address each level, and assess effectiveness after fixes.",
            "After releasing the new version, keep tracking user feedback and continue improving the product.",
          ],
        },
        {
          title: "Allow flexibility for future feature development (2 - 5 years)",
          mid: "Create a flexible layout for easy modification when adding or removing features, categorized into five groups:",
          content: [
            "Account management",
            "Card and transaction account management",
            "Features for managing loans and lending",
            "Income and expense tracking, savings account management",
            "Additional utilities such as shopping, ticket booking, and bill payments...",
          ],
          end: "This approach simplifies feature updates, and maintenance, and minimizes risks. However, users may struggle with navigation if they don’t understand the categories, and managing separate clusters could complicate integration and interface consistency.",
        },
      ],
    },
    section4: {
      title: "User Flow",
      content:
        "Below is a typical loan flow of a banking application. However, in this case study, I only evaluated and improved the UX/UI from the loan introduction page to the final information page before submitting all data to the bank (to prevent the unintended activation of loans).",
      img: "/vpbank/images/section-4.png",
    },
    section5: {
      title: "Evaluate and Improve",
      content:
        "Next, I will perform a detailed analysis of the problems in the current version of the application. After identifying these problems, I will propose practical solutions to address them and improve the overall user experience effectively.",
      data: [
        {
          title: "Available loans screen",
          content:
            "After accessing the 'Loans' section on the homepage, users will be directed to a page displaying available loans, where they can select a loan that suits their personal needs.",
          problem: {
            img: "/vpbank/images/section-5.1-pr.png",
            data: [
              {
                title: "Navigation Clarity Issues",
                content:
                  "Navigation should be logically organized and clear. The back function is correctly placed, but the “X” icon may be confused with closing a pop-up instead of returning to the home page.",
              },
              {
                title: "Support Features Missing",
                content:
                  "The mass market includes rural customers, who are not tech-savvy and may require additional support features to engage effectively.",
              },
              {
                title: "Unappealing Loan Introduction",
                content:
                  "The loan introduction lacks appeal, making it hard for customers to see the benefits and potential of the loan.",
              },
              {
                title: "VPBank Loan Limitations",
                content:
                  "VPBank currently offers only eligible consumer loans (as shown in the image), providing users with limited options.",
              },
              {
                title: "Unnecessary Button Concerns",
                content:
                  "This button is unnecessary, as the user can interact directly with the loan package shown above. Assuming there is more than one loan package, what will the button look like?",
              },
            ],
          },
          solution: {
            img: "/vpbank/images/section-5.1-so.png",
            data: [
              {
                title: "Add Support Button",
                content:
                  "I suggest adding a consulting button to help VP Bank answer user questions promptly.",
              },
              {
                title: "Pre-check Eligible Loans",
                content:
                  'At this step, I suggest that the VP pre-check which loans the customer is eligible for and display them in the "Available Loans Package" known as “Khoản vay có hiệu lực” section.',
              },
              {
                title: "Add Notes for Loan Conditions",
                content:
                  "Some loans only differ in application conditions, while others have similar information. I will add a note to describe the conditions the customer meets.",
              },
              {
                title: "Display All Loans with Conditions",
                content:
                  'Based on the initial analysis, VP Bank currently only shows eligible loans while hiding ineligible ones in another section. I propose displaying all loans, including ineligible ones, and adding a text button for "Loan Conditions" known as “Điều kiện vay”.',
              },
            ],
          },
        },
        {
          title: "Loan details",
          content:
            "After users select a suitable loan package, they are directed to the loan details page. On this page, I want users to carefully read the information, so presenting it in a visually engaging and appealing way can help improve their ability to follow and understand the details.",
          problem: {
            img: "/vpbank/images/section-5.2-pr.png",
            data: [
              {
                title: "Improve Loan Info Clarity",
                content:
                  "The information is presented in text form, making it less visual and easy to overlook when reading. In addition, some key details that need to be highlighted to attract customers are not made clear, leaving users unable to fully grasp the benefits of using this loan.",
              },
              {
                title: "Use Home Icon for Navigation",
                content:
                  "I believe the 'Hủy' button is unnecessary since we already have a back button in the form of an icon on the left. However, if users want to quickly return to the homepage, we could use a home icon for this purpose.",
              },
              {
                title: "Improving the 'Decline' Button",
                content:
                  'I find the "Từ chối" button unnecessary, as it only returns to the homepage. It would be more useful as a support button for clarifying terms or providing feedback.,',
              },
              {
                title: "Confirm Important Info",
                content:
                  "For crucial information, users should confirm by ticking a checkbox or scrolling to the end before proceeding, ensuring both parties' rights are protected.",
              },
            ],
          },
          solution: {
            img: "/vpbank/images/section-5.2-so.png",
            data: [
              {
                title: "Add Banner for Loan Overview",
                content:
                  "Here, I added a banner to visually present a brief overview of the loan, providing users with an initial understanding of the key details in a more engaging and accessible format.",
              },
              {
                title: "Key Loan Benefits Overview",
                content:
                  "On the other hand, key figures highlighting the loan benefits will be clearly displayed below the banner to give customers a better overview of the loan offers.",
              },
              {
                title: "Organizing Loan Details for Clarity",
                content:
                  "For the detailed loan information, I categorized it into main sections, and within each section, I further divided it into sub-sections to help users easily read and grasp the information.",
              },
              {
                title: "Checkbox",
                content:
                  "I chose to use a checkbox here to confirm that users agree to the stated terms.",
              },
            ],
          },
        },
        {
          title: "Loan Application",
          content:
            "After users agree to the terms, they proceed to enter the required information to initiate the loan. While the process has three steps, I will only analyze the first. Details on the next steps can be found in the UI Design section below.",
          problem: {
            img: "/vpbank/images/section-5.3-pr.png",
            data: [
              {
                title: "Improving Step Visibility",
                content:
                  "In my assessment, the display of the required steps is not visualized effectively. The progress bar here is only an estimate, and while the specific step count 'Step 1/3' is provided, I believe it is insufficient.",
              },
              {
                title: "Improving Information Field Usability",
                content:
                  "Currently, the information fields are quite interactive but need better separation for easier tracking. In addition, some fields should be optimized by suggesting the best options to reduce steps, as many fields are often left blank unnecessarily and take time to fill out.",
              },
              {
                title: "Optimizing UX and Business Goals",
                content:
                  "Like the 'Cancel' button above, this option enhances UX by letting users quickly return to the homepage. However, this ease of exit may hurt sales, as customers can easily opt-out.",
              },
            ],
          },
          solution: {
            img: "/vpbank/images/section-5.3-so.png",
            data: [
              {
                title: "UX Optimization with Dropdown",
                content:
                  "To balance UX and business needs, I suggest replacing it with a dropdown “⋮” that hides 'Back to Homepage' and prioritizes a 'Support' button. This design allows for easy future upgrades while maintaining familiar user interactions.",
              },
              {
                title: "Step Order in Progress Bar",
                content:
                  "In the new UI version, I have integrated the step order into the progress bar, which clearly shows the total process time that each step will take, based on the length of each progress segment.",
              },
              {
                title: "Element Organization and Emphasis",
                content:
                  "Based on previous analyses, I have separated each component into distinct groups and highlighted important sections through color and size.",
              },
            ],
          },
        },
      ],
    },
    section6: {
      title: "UI Design",
      content:
        "Below is a collection of additional UIs to explain and complement some features you can explore. Thank you for taking the time to review this case study! ~",
      datas: [
        {
          title: "Loans / Loan Information Screens",
          imgs: [
            "/vpbank/images/section-6.1-1.png",
            "/vpbank/images/section-6.1-2.png",
            "/vpbank/images/section-6.1-3.png",
            "/vpbank/images/section-6.1-4.png",
            "/vpbank/images/section-6.1-5.png",
          ],
        },
        {
          title: "Loan Application Screens",
          imgs: [
            "/vpbank/images/section-6.2-1.png",
            "/vpbank/images/section-6.2-2.png",
            "/vpbank/images/section-6.2-3.png",
            "/vpbank/images/section-6.2-4.png",
            "/vpbank/images/section-6.2-5.png",
          ],
        },
        {
          title: "Insurance Information Screens",
          imgs: ["/vpbank/images/section-6.3-1.png", "/vpbank/images/section-6.3-2.png"],
        },
        {
          title: "Result Bottom Sheet",
          imgs: [
            "/vpbank/images/section-6.4-1.png",
            "/vpbank/images/section-6.4-2.png",
            "/vpbank/images/section-6.4-3.png",
          ],
        },
      ],
    },
  },
};
