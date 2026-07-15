import floristryImage from "../assets/images/services/floristry.jpg";
import weddingImage from "../assets/images/services/wedding.jpg";
import eventImage from "../assets/images/services/events.jpg";

const servicesPage = [
  {
    id: 1,
    eyebrow: "Floristry",

    title: "Fresh Flowers For Every Meaningful Moment",

    description:
      "From everyday bouquets to personalized floral gifts, each arrangement is handcrafted with fresh blooms and thoughtful attention to detail.",

    image: floristryImage,

    imageAlt: "Fresh floral arrangements",

    highlights: [
      "Fresh flowers daily",
      "Customized bouquets",
      "Gift arrangements",
      "Same-day preparation (subject to availability)",
    ],

    button: {
      label: "Reserve Arrangement",
      to: "/reservation",
    },

    reverse: false,
  },

  {
    id: 2,
    eyebrow: "Wedding Flowers",

    title: "Elegant Floral Styling For Your Special Day",

    description:
      "Beautiful bridal bouquets, entourage flowers, ceremony décor, and reception arrangements designed to make your wedding unforgettable.",

    image: weddingImage,

    imageAlt: "Wedding floral arrangements",

    highlights: [
      "Bridal bouquets",
      "Entourage flowers",
      "Ceremony styling",
      "Reception floral décor",
    ],

    button: {
      label: "Plan Your Wedding",
      to: "/reservation",
    },

    reverse: true,
  },

  {
    id: 3,
    eyebrow: "Event Styling",

    title: "Floral Designs That Elevate Every Celebration",

    description:
      "From birthdays and anniversaries to corporate gatherings and special occasions, we create floral styling that complements your event beautifully.",

    image: eventImage,

    imageAlt: "Event floral styling",

    highlights: [
      "Birthday celebrations",
      "Corporate events",
      "Debuts & anniversaries",
      "Custom floral concepts",
    ],

    button: {
      label: "Book A Consultation",
      to: "/reservation",
    },

    reverse: false,
  },
];

export default servicesPage;