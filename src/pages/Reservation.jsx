import { useLocation } from "react-router-dom";

import Container from "../components/ui/Container";

import ReservationHero from "../components/reservation/ReservationHero";
import ReservationSummary from "../components/reservation/ReservationSummary";
import ReservationForm from "../components/reservation/ReservationForm";

export default function Reservation() {

    const location = useLocation();

    const flower = location.state?.flower ?? null;

    return (
        <>
            <ReservationHero />

            <section className="section">

                <Container>

                    <ReservationSummary
                        flower={flower}
                    />

                    <ReservationForm
                        selectedFlower={flower}
                    />
                </Container>

            </section>

        </>
    );
}