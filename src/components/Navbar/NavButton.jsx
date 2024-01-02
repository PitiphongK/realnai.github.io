import { Link } from "react-scroll";

export default function NavButton({ children, scrolled, to }) {
  return (
    <>
      <Link
        to={to}
        activeClass={scrolled ? "active" : "active scrolled"}
        className="nav-button"
        spy={true}
        offset={-65}
        smooth={true}
        duration={0}
        style={{ color: scrolled ? "var(--black)" : "var(--white)" }}
      >
        {children}
      </Link>
    </>
  );
}
