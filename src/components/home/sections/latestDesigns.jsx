import latestDesigns from "../../../data/latestDesigns";

import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";

import FlowerCard from "../../flowers/FlowerCard";

export default function LatestDesigns({
    onView,
}) {

    return (

        <section className="section">

            <Container>

                <SectionTitle
                    eyebrow="Fresh From Our Studio"
                    title="Our Latest Floral Designs"
                    description="Discover our newest handcrafted floral arrangements, thoughtfully designed for every special occasion."
                />

                <div className="flower-grid">

                    {latestDesigns.map((flower) => (

                        <FlowerCard
                            key={flower.id}
                            flower={flower}
                            badge={flower.badge}
                            onView={onView}
                        />

                    ))}

                </div>

            </Container>

        </section>

    );

}