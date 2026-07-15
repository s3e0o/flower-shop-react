import { Link } from "react-router-dom";

export default function Button({
  children,
  to,
  href,
  state,
  icon,
  loading = false,
  variant = "primary",
  size = "medium",
  type = "button",
  className = "",
  onClick,
  disabled = false,
}) {
  const buttonClassName = [
    "btn",
    `btn--${variant}`,
    `btn--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {loading ? (
        <span className="btn__spinner" />
      ) : (
        icon && <span className="btn__icon">{icon}</span>
      )}

      <span>{children}</span>
    </>
  );

  if (to) {
    return (
      <Link
        className={buttonClassName}
        to={to}
        state={state}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    const isExternal =
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:");

    return (
      <a
        href={href}
        className={buttonClassName}
        target={isExternal && href.startsWith("http") ? "_blank" : undefined}
        rel={
          isExternal && href.startsWith("http")
            ? "noopener noreferrer"
            : undefined
        }
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={buttonClassName}
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {content}
    </button>
  );
}