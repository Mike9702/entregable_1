import { useEffect, useState } from "react";
import "./App.css";
import infoQuotes from "./db/infoQuotes.json";
import { getRandomElement } from "./utils/random";
import QuoteCard from "./components/QuoteCard";

const backgrounds = ["img1", "img2", "img3", "img4"];

function App() {
  const [quote, setQuote] = useState(getRandomElement(infoQuotes));
  const [currentImg, setCurrentImg] = useState(getRandomElement(backgrounds));

  const handleChangeQuote = () => {
    setQuote(getRandomElement(infoQuotes));
    setCurrentImg(getRandomElement(backgrounds));
  };

  return (
    <main className={`app ${currentImg}`}>
      <QuoteCard handleChangeQuote={handleChangeQuote} quote={quote} />
    </main>
  );
}

export default App;
