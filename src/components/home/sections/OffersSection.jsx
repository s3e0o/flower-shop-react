import { FaWhatsapp } from "react-icons/fa";

import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";
import Button from "../../ui/Button";

import footer from "../../../data/footer";
import offers from "../../../data/offers";

export default function OffersSection() {
  function openWhatsApp(message) {
    const url = `https://wa.me/${footer.social.whatsapp}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  }

  return (
    <section className="offers section">
      <Container>

        <SectionTitle
          eyebrow="Offers & Deals"
          title="Special Promotions"
          description="Take advantage of our current promotions and exclusive floral offers."
        />

        <div className="offers-grid">

          {offers.map((offer) => (

            <article
              key={offer.id}
              className="offer-card"
            >

              <span className="offer-card__badge">
                {offer.badge}
              </span>

              <h3>{offer.title}</h3>

              <p>{offer.description}</p>

              <small>{offer.validUntil}</small>

              <Button
                icon={<FaWhatsapp />}
                onClick={() =>
                  openWhatsApp(
                    offer.whatsappMessage
                  )
                }
              >
                Inquire on WhatsApp
              </Button>

            </article>

          ))}

        </div>

      </Container>
    </section>
  );
}