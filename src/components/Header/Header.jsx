import './Header.css';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <h1>Hi, I'm Pitiphong</h1>
      <p>
        Please enjoy my website.
      </p>
    </header>
  );
}