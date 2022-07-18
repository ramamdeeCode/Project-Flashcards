import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../utils/api";
import NotEnoughCard from "./NotEnoughCard";
import EnoughCards from "./EnoughCards";

function StudyDeck() {
  // getting deckId from params
  const { deckId } = useParams();

  const [deck, setDeck] = useState({});
  const [numberOfCards, setNumberOfCard] = useState(0);

  //load deck data when evre the deckId change
  useEffect(() => {
    async function loadDeck() {
      const abortController = new AbortController();
      try {
        const fetchedDeck = await readDeck(deckId, abortController.siganal);
        setDeck(fetchedDeck);
        setNumberOfCard(fetchedDeck.cards.length);
      } catch (e) {
        console.log(e.name);
      }
      return () => {
        abortController.abort();
      };
    }
    loadDeck();
  }, [deckId]);

  //Render components according to the number of cards

  if (numberOfCards > 2) {
    return (
      <div>
        <EnoughCards deck={deck} numberOfCards={numberOfCards} />
      </div>
    );
  } else {
    return (
      <div>
        <NotEnoughCard deck={deck} numberOfCards={numberOfCards} />
      </div>
    );
  }
}
export default StudyDeck;
