import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { readDeck } from "../utils/api/index";
import Deck from "./Deck";
import Card from "./Card";

function ViewDeck() {
  //getting deckId from Params
  const { deckId } = useParams();

  const [deck, setDeck] = useState({});
  const [cards, setCards] = useState([]);
  console.log("DeckId from ViewDeck:", deckId);

  // load data when deckId change
  useEffect(() => {
    async function loadDeck() {
      const abortController = new AbortController();
      try {
        const fetchedDeck = await readDeck(deckId, abortController.signal);
        setDeck(fetchedDeck);
        setCards([...fetchedDeck.cards]);
      } catch (e) {
        console.log(e);
      }
      return () => {
        abortController.abort();
      };
    }
    loadDeck();
  }, [deckId]);

  console.log("cards from ViewDeck:", cards);

  return (
    // bread crump for each single deck
    <div>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home mr-1"></span>Home
            </Link>
          </li>
          <li className="breadcrumb-item active">{deck.name}</li>
        </ol>
      </nav>

      {/* this component responsible for desplaying a single deck */}
      <Deck deck={deck} deckId={deckId} />

      {/* this component responsible for desplaying all the card of the selected deck */}
      <Card cards={cards} deck={deck} />
    </div>
  );
}
export default ViewDeck;
