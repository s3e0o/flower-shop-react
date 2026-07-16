import { Link, useLocation } from "react-router-dom";

export default function Logo() {
  const location = useLocation();

  function handleClick() {
    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  return (
    <Link
      to="/"
      className="logo"
      onClick={handleClick}
    >
      <div className="logo-text">
        <h1>PATLAT ALKUWAIT</h1>

        <span>Floral Boutique</span>
      </div>
    </Link>
  );
}