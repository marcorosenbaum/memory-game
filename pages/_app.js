import "../styles/global.css";
import { GameProvider } from "../contexts/GameContext";

import Navigation from "../components/Navigation";

export default function App({ Component, pageProps }) {
  return (
    <GameProvider>
      <Navigation />
      <Component {...pageProps} />
    </GameProvider>
  );
}
