import storyImage from "../assets/images/about/story.jpg";

import {
    FiHeart,
    FiGift,
    FiAward,
} from "react-icons/fi";

const aboutPage = {
    story: {
        eyebrow: "Our Story",

        title: "Creating Beautiful Moments Through Flowers",

        description:
            "At KP Patlat Floral Boutique, we believe flowers speak when words cannot. Every bouquet is thoughtfully handcrafted to celebrate love, comfort, gratitude, and life's most memorable occasions.\n\nFrom intimate bouquets to elegant event styling, we take pride in creating floral arrangements that reflect your story. Every bloom is carefully selected, every detail thoughtfully arranged, and every creation made with genuine passion.\n\nOur goal is simple—to create flowers that bring joy, express emotions, and leave lasting memories for every customer we serve.",

        image: storyImage,

        imageAlt: "Our florist arranging flowers",

        highlights: [
            "Fresh premium flowers",
            "Personalized arrangements",
            "Passionate craftsmanship",
            "Designed with care",
        ],

        button: {
            label: "View Our Collection",
            to: "/flowers",
        },

        reverse: false,
    },

    features: [
        {
            id: 1,
            icon: FiHeart,
            title: "Crafted With Love",
            description:
                "Every arrangement is thoughtfully handcrafted with passion, creativity, and attention to detail.",
        },

        {
            id: 2,
            icon: FiGift,
            title: "Personalized Designs",
            description:
                "Each bouquet is tailored to match your celebration, style, and personal preferences.",
        },

        {
            id: 3,
            icon: FiAward,
            title: "Quality You Can Trust",
            description:
                "We carefully select fresh blooms to ensure every arrangement is beautiful and long-lasting.",
        },


    ],


};
aboutPage.mission = {
    eyebrow: "Our Mission",

    title: "Creating Meaningful Floral Experiences",

    description:
        "Our mission is to create handcrafted floral arrangements that celebrate life's most meaningful moments. Through creativity, fresh blooms, and heartfelt service, we strive to make every bouquet a lasting expression of love, gratitude, and joy.",
};

aboutPage.vision = {
    eyebrow: "Our Vision",

    title: "Becoming A Trusted Floral Boutique",

    description:
        "We envision KP Patlat Floral Boutique as a trusted destination for elegant floral designs, recognized for exceptional craftsmanship, personalized service, and beautiful arrangements that inspire lasting memories for every celebration.",
};
export default aboutPage;