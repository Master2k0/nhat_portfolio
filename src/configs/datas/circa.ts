import { siteConfig } from "..";

export const Circa = {
  breadCrumbHref: [
    siteConfig.pageList.home.href,
    siteConfig.pageList.projectHighlights.href,
    siteConfig.pageList.circa.href,
  ],
  consumerProduct: {
    section1: {
      mainTitle: "Consumer Product",
      subTitle: "B2C Medical Ecommerce",
      content:
        "Circa is a specialized e-commerce platform for pharmaceuticals. We focus on retail products related to pharmaceuticals and healthcare. Our goal is to create seamless and efficient solutions for ordering medications and providing direct consultations with pharmacists to address common health issues.",
      img: "/circa/consumer-product/images/img-section1.png",
    },
    section2: {
      title: "Product Scope",
      contents: [
        "Along with selling pharmaceutical products, we are continuously expanding into other medical areas, including direct health consultations to provide health advice, along with recommended products for each specific case.",
        "On the other hand, one standout feature we aim to develop is allowing users to stay connected with their families by indirectly caring for their loved ones. Via managing each family member's prescriptions and syncing them across the household, anyone can proactively monitor health conditions and place medication orders for those experiencing health issues and running low on medication.",
      ],
    },
    section3: {
      title: "Personas",
      content:
        "To provide a clearer picture of the target users for the application, I have developed two personas to define their specific needs and preferences better, ensuring the app is tailored to meet their expectations.",
      users: [
        {
          icon: "/circa/consumer-product/icons/lan-icon.svg",
          name: "MS. Lan Tran",
          info: "25/ Female /Marketing Executive",
          position: "High Tech Proficiency",
          "Lifestyle & Behavior:": [
            "Frequently shops online across multiple e-commerce platforms.",
            "Values convenience, speed, and seamless checkout experiences.",
            "Prefers mobile apps for shopping and payments.",
            "She occasionally buys health-related products for herself and her family.",
          ],
          "Needs & Pain Points:": [
            "Wants a quick and hassle-free medication ordering process.",
            "Prefers an intuitive app interface with fast search and checkout.",
            "Needs trusted product info and pharmacist support.",
            "Expect seamless payment and delivery tracking.",
          ],
        },

        {
          icon: "/circa/consumer-product/icons/nam-icon.svg",
          name: "MS. Nam Nguyen",
          info: "65/ Male /Retired Teacher",
          position: "Low Tech Proficiency",
          "Lifestyle & Behavior:": [
            "Frequently needs prescription medication for chronic conditions.",
            "Relies on family members, like Lan, to help with online orders.",
            "Prefers in-person visits due to unfamiliarity with apps.",
            "Finds app interfaces complex and difficult to navigate.",
          ],
          "Needs & Pain Points:": [
            "Requires an easy-to-use platform with clear instructions.",
            "Needs reminders and easy prescription management.",
            "Prefers a family-support feature for loved ones to assist with orders.",
            "Values trusted sources and pharmacist advice.",
          ],
        },
      ],
    },
    section4: {
      title: "User Journey",
      content: `In this project, we identified two main user types. The first group consists of <span class='text-yellow text-14m'>occasional buyers</span>—users who do not shop regularly and only visit the platform when they experience a sudden health concern or have an unexpected need. The second group includes <span class='text-yellow text-14m'>frequent buyers</span> who require medication periodically and need a tool to remind them when it’s time to reorder their prescriptions.`,
      "Occasional Buyers": [
        "The user experiences a sudden health concern, or needs a specific healthcare product. They finds their own way to Circa.",
        "The user lands on homepage and browses available products and then use the search bar or category filters to find the needed medication.",
        "The user selects a product, adds it to their cart, and proceeds to checkout by entering their delivery details.",
        "Casual customer typically don't opt to create an account initially unless it impacts their purchase, so they complete the checkout process as a guest without logging in.",
        "The user receives order confirmation and estimated delivery time. They can track their order in real time.",
      ],
      "Frequent Buyers": [
        "The user has an ongoing medical need and is already familiar with Circa Platform. They visit Circa directly or through a saved link/app to reorder.",
        'The user quickly navigates to their "Order History " or checks the reminder notification to review the list of products based on their previous purchases.',
        "The user selects a product from the previous orders, adds it to their cart, and proceeds to checkout",
        "They proceed to checkout, confirm delivery details, select a payment method, and use saved information for a quick payment.",
        "The user receives order confirmation and estimated delivery time. They can track their order in real time.",
      ],
    },
    section5: {
      title: "Information Architecture",
      content:
        "From the touchpoints outlined above, I mapped out the screens and their necessary details.",
      grid: [
        {
          title: "Log in",
          list1: ["Phone number"],
          list2: ["Take OTP", "Support"],
        },
        {
          title: "Homepage",
          list1: [
            "Search tool",
            "Take OTP",
            "Hero banner",
            "Featured products",
            "Mini banners",
            "Other product sections",
          ],
          list2: ["Log in", "Cart", "Support"],
        },
        {
          title: "Product list",
          list1: ["Product Filters", "Sort Products", "Products by category"],
          list2: ["Add to cart", "Product details"],
        },
        {
          title: "Product details",
          list1: ["Product images", "Information", "Related products"],
          list2: ["Select quantity/ variants", "Add to cart/ Buy now", "Support"],
        },
        {
          title: "Cart",
          list1: ["Added products List", "Total order value"],
          list2: ["Edit quantity", "Remove product", "Checkout"],
        },
        {
          title: "Checkout",
          list1: [
            "Delivery information",
            "Payment method",
            "Products list",
            "Total order value",
            "Platform policy",
          ],
          list2: ["Apply discount code", "Set reminder schedule", "Confirm order"],
        },
        {
          title: "Order detail",
          list1: ["Order information", "Shipping Status"],
          list2: ["Reorder", "Set reminder schedule", "Cancellation Support", "Hotline"],
        },
        {
          title: "User Account",
          list1: [
            "Personal information",
            "Order list",
            "Wishlist",
            "Order reminder schedule",
            "Address book",
          ],
          list2: ["Change information", "Tracking orders"],
        },
        {
          title: "Connection",
          list1: ["Member Profile"],
          list2: ["Add connection"],
        },
        {
          title: "Member Profile",
          list1: ["Personal Information", "Prescription", "Reminder Schedule"],
          list2: ["OnePHR", "Order for this member", "Tracking orders"],
        },
      ],
    },
    section6: {
      title: "Wireframe/ UserFlow ",
      img: "/circa/consumer-product/images/user-flow.png",
    },
    section7: {
      title: "App UI Design",
      content:
        "Below is a collection of additional UIs to explain and complement some features you can explore. Thank you for taking the time to review this project! ~",
      homescreen: {
        title: "Home Screen",
        imgs: [
          "/circa/consumer-product/images/home-screen-1.png",
          "/circa/consumer-product/images/home-screen-2.png",
          "/circa/consumer-product/images/home-screen-3.png",
          "/circa/consumer-product/images/home-screen-4.png",
          "/circa/consumer-product/images/home-screen-5.png",
        ],
      },
      productList: {
        title: "Product List",
        imgs: [
          "/circa/consumer-product/images/product-list-1.png",
          "/circa/consumer-product/images/product-list-2.png",
          "/circa/consumer-product/images/product-list-3.png",
          "/circa/consumer-product/images/product-list-4.png",
          "/circa/consumer-product/images/product-list-5.png",
        ],
      },
      productDetail: {
        title: "Product Detail",
        imgs: [
          "/circa/consumer-product/images/product-detail-1.png",
          "/circa/consumer-product/images/product-detail-2.png",
          "/circa/consumer-product/images/product-detail-3.png",
        ],
      },
      cart: {
        title: "Cart",
        imgs: [
          "/circa/consumer-product/images/cart-1.png",
          "/circa/consumer-product/images/cart-2.png",
        ],
      },
      checkout: {
        title: "Checkout",
        imgs: [
          "/circa/consumer-product/images/checkout-1.png",
          "/circa/consumer-product/images/checkout-2.png",
        ],
      },
      myOrder: {
        title: "My Orders/ Order Detail",
        imgs: [
          "/circa/consumer-product/images/my-order-1.png",
          "/circa/consumer-product/images/my-order-2.png",
          "/circa/consumer-product/images/my-order-3.png",
        ],
      },
      myAccount: {
        title: "My Account/ Connection/ Member Profile",
        imgs: [
          "/circa/consumer-product/images/my-account-1.png",
          "/circa/consumer-product/images/my-account-2.png",
          "/circa/consumer-product/images/my-account-3.png",
          "/circa/consumer-product/images/my-account-4.png",
        ],
      },
    },
    section8: {
      title: "Web UI Design",
      list: [
        {
          description: "Homepage",
          img: "/circa/consumer-product/images/web-ui-1.png",
        },
        {
          description: "Product List",
          img: "/circa/consumer-product/images/web-ui-2.png",
        },
        {
          description: "Product Detail",
          img: "/circa/consumer-product/images/web-ui-3.png",
        },
        {
          description: "Cart",
          img: "/circa/consumer-product/images/web-ui-4.png",
        },
        {
          description: "Checkout",
          img: "/circa/consumer-product/images/web-ui-5.png",
        },
        {
          description: "My Orders",
          img: "/circa/consumer-product/images/web-ui-6.png",
        },
        {
          description: "Order Detail",
          img: "/circa/consumer-product/images/web-ui-7.png",
        },
        {
          description: "Connection",
          img: "/circa/consumer-product/images/web-ui-8.png",
        },
        {
          description: "Member Profile",
          img: "/circa/consumer-product/images/web-ui-9.png",
        },
        {
          description: "My Profile",
          img: "/circa/consumer-product/images/web-ui-10.png",
        },
      ],
    },
  },
};
