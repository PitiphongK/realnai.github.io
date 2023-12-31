export default function NavButton({ children, onSelect, isSelected, scrolled }) {
  return (
    <li>
      <button
        className={isSelected ? "selected" : ""}
        onClick={onSelect}
        style={{ color: scrolled ? "var(--black)" : "var(--white)" }}
      >
        {children}
      </button>
    </li>
  );
}
