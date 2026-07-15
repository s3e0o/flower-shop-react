import Container from "../ui/Container";

export default function ReservationHero() {
  return (
    <section className="section">

      <Container>

        <div className="reservation-hero">

          <p className="reservation-hero__eyebrow">
            Reservation
          </p>

          <h1>
            Reserve Your
            <br />
            Floral Arrangement
          </h1>

          <p>
            Tell us about your special occasion and we'll help
            create the perfect floral arrangement just for you.
          </p>

        </div>

      </Container>

    </section>
  );
}