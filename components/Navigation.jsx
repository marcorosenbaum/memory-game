import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <Link href="/">Start</Link>

      <Link href="introduction">Introduction</Link>
      <Link href="game">Game</Link>
    </nav>
  );
}
