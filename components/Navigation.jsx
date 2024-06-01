import Link from "next/link";

import classes from "../styles/Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={classes.navbar}>
      <Link href="/">Start</Link>
      <Link href="introduction">Introduction</Link>
      <Link href="game">Game</Link>
    </nav>
  );
}
