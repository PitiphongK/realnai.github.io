import { Link } from "react-scroll";

export default function NavButton({ children, scrolled, to, onClick }) {
  return (
    <>
      <Link
        to={to}
        activeClass={`section-active ${scrolled ? "" : "scrolled"}`}
        className="nav-button"
        spy={true}
        offset={-65}
        smooth={true}
        duration={0}
        style={{
          color: scrolled ? "var(--black)" : "var(--white)",
        }}
        onClick={onClick}
      >
        {children}
      </Link>
    </>
  );
}
