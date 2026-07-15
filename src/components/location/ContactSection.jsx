import {
    FiMapPin,
    FiPhone,
    FiMail,
    FiClock,
    FiFacebook,
    FiInstagram,
    FiNavigation,
} from "react-icons/fi";

import { FaWhatsapp } from "react-icons/fa";

import Button from "../ui/Button";
import Container from "../ui/Container";

import location from "../../data/location";

export default function ContactSection() {
    return (
        <section className="contact-section section">
            <Container>

                <div className="contact-section__grid">

                    <div className="contact-section__map">

                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps?q=Alaminos+City+Pangasinan&output=embed"
                            loading="lazy"
                        />

                    </div>

                    <div className="contact-section__content">

                        <h2>Visit Our Boutique</h2>

                        <div className="contact-item">
                            <FiMapPin />
                            <span>{location.address}</span>
                        </div>

                        <div className="contact-item">
                            <FiClock />
                            <div>
                                {location.hours.map((hour) => (
                                    <p key={hour}>{hour}</p>
                                ))}
                            </div>
                        </div>

                        <div className="contact-item">
                            <FiPhone />
                            <span>{location.phone}</span>
                        </div>

                        <div className="contact-item">
                            <FiMail />
                            <span>{location.email}</span>
                        </div>

                        <div className="contact-socials">

                            <a
                                href={location.whatsapp}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="WhatsApp"
                            >
                                <FaWhatsapp />
                            </a>

                            <a
                                href={location.facebook}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FiFacebook />
                            </a>

                            <a
                                href={location.instagram}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FiInstagram />
                            </a>

                        </div>

                        <Button
                            href={location.maps}
                            variant="primary"
                        >
                            <FiNavigation />

                            Get Directions
                        </Button>

                    </div>

                </div>

            </Container>
        </section>
    );
}