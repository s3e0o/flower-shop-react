import Button from "../ui/Button";

export default function ReservationSummary({
  flower,
}) {
  if (!flower) {
    return (
      <div className="reservation-summary reservation-summary--empty">

        <h2>No Arrangement Selected</h2>

        <p>
          Browse our flower collection and choose an arrangement,
          or select one later from the reservation form.
        </p>

        <Button to="/flowers">
          Browse Collection
        </Button>

      </div>
    );
  }

  return (
    <div className="reservation-summary">

      <img
        src={flower.image}
        alt={flower.name}
      />

      <div>

        <span className="flower-card__category">
          {flower.category}
        </span>

        <h2>{flower.name}</h2>

        <p>{flower.description}</p>

        <h3>
          ₱{flower.price.toLocaleString()}
        </h3>

        <Button
          to="/flowers"
          variant="secondary"
        >
          Change Arrangement
        </Button>

      </div>

    </div>
  );
}