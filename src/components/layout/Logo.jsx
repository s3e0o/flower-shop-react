import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="logo">

      <div className="logo-text">

        <h1>KP PATLAT</h1>

        <span>Floral Boutique</span>

      </div>

    </Link>
  );
}