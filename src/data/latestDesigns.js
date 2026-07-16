import flowers from "./flowers";

const latestDesignIds = [
  {
    id: 2,
    badge: "New Arrival",
    tagline: "Perfect for elegant celebrations.",
  },
  {
    id: 5,
    badge: "Best Seller",
    tagline: "A customer favorite for every occasion.",
  },
  {
    id: 8,
    badge: "Limited Edition",
    tagline: "Available while this seasonal design lasts.",
  },
];

const latestDesigns = latestDesignIds
  .map((item) => {
    const flower = flowers.find(
      (flower) => flower.id === item.id
    );

    if (!flower) return null;

    return {
      ...flower,
      badge: item.badge,
      tagline: item.tagline,
    };
  })
  .filter(Boolean);

export default latestDesigns;