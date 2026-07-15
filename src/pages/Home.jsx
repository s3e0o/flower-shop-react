import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

export default function Home() {
  return (
    <section className="section">
      <Container>

        <h1>KP Patlat</h1>

        <p
          style={{
            margin: "1rem 0 2rem",
          }}
        >
          Luxury Floral Boutique
        </p>

        <Button to="/flowers">
          Explore Collection
        </Button>

      </Container>
    </section>
  );
}