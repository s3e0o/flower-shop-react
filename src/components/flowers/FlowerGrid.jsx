import FlowerCard from "./FlowerCard";

export default function FlowerGrid({
  flowers,
  onView,
}) {
  return (
    <div className="flower-grid">
      {flowers.map((flower) => (
        <FlowerCard
          key={flower.id}
          flower={flower}
          onView={onView}
        />
      ))}
    </div>
  );
}