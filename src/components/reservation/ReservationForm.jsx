import { useState } from "react";

import { FaWhatsapp } from "react-icons/fa";

import Button from "../ui/Button";
import ReservationFields from "./ReservationFields";

import flowers from "../../data/flowers";
import reservationOccasions from "../../data/reservationOccasions";
import footer from "../../data/footer";

export default function ReservationForm({
    selectedFlower,
}) {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        flower: "",
        occasion: "",
        date: "",
        message: "",
    });

    function handleChange(event) {
        setForm((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    }

    function handleWhatsApp() {
        if (!form.name.trim()) {
            alert("Please enter your name.");
            return;
        }

        if (!form.phone.trim()) {
            alert("Please enter your phone number.");
            return;
        }

        if (!form.occasion) {
            alert("Please select an occasion.");
            return;
        }

        const arrangement =
            selectedFlower?.name || form.flower;

        if (!arrangement) {
            alert("Please select a flower arrangement.");
            return;
        }

        const message = `🌸 Hello KP Patlat Floral Boutique!

I'd like to reserve a floral arrangement.

━━━━━━━━━━━━━━

👤 Name:
${form.name}

📱 Phone:
${form.phone}

✉️ Email:
${form.email || "Not provided"}

💐 Arrangement:
${arrangement}

🎉 Occasion:
${form.occasion}

📅 Preferred Date:
${form.date || "Not specified"}

📝 Special Requests:
${form.message || "None"}

━━━━━━━━━━━━━━

Looking forward to your response.
Thank you! 🌸`;

        const phoneNumber = footer.social.whatsapp;

        window.open(
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
            "_blank"
        );
    }

    return (
        <section className="reservation-form">

            <h2>Your Details</h2>

            <ReservationFields
                form={form}
                flowers={flowers}
                occasions={reservationOccasions}
                selectedFlower={selectedFlower}
                onChange={handleChange}
            />

            <div
                style={{
                    marginTop: "2.5rem",
                    display: "flex",
                    justifyContent: "flex-end",
                }}
            >
                <Button
                    onClick={handleWhatsApp}
                    icon={<FaWhatsapp />}
                >
                    Continue on WhatsApp
                </Button>
            </div>

        </section>
    );

}