export default function NavButton({ children, onSelect, isSelected }) {
  return (
    <li>
      <button className={isSelected ? undefined : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
