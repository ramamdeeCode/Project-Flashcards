import { listDecks, deleteDeck } from "../utils/api/index";

import { useEffect, useState } from "react";

import Decks from "./Decks";

function DeckList() {
  const [decks, setDecks] = useState([]);

  //fetch and load data to decks
  useEffect(() => {
    async function loadDecks() {
      const abortController = new AbortController();
      try {
        const response = await listDecks(abortController.signal);
        setDecks(response);
      } catch (e) {
        console.log(e.name);
      }
      return () => {
        abortController.abort();
      };
    }
    loadDecks();
  }, []);

  return <Decks decks={decks} deleteDeck={deleteDeck} />;
}

export default DeckList;
