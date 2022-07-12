import { listDecks, deleteDeck } from "../utils/api/index";

import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function DeckList() {
  const history = useHistory();
  const [decks, setDecks] = useState([]);

  //fetch and load dat to decks
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

  //delete deck handler
  const handleDeckDelete = async (event) => {
    if (
      window.confirm(`Delete this deck ? You will not be able to recover it.`)
    ) {
      await deleteDeck(event);
      history.go(0);
    }
  };

  return (
    <div>
      {/* {map decks objects and display out the name and description} */}
      {decks.map((deck) => (
        <div key={deck.id} className="card">
          <div className="card-header">{deck.name}</div>
          <div className="card-body">
            <p>{deck.description}</p>
            <button className="btn btn-primary">View</button>
            <span> </span>
            <button className="btn btn-primary">Study</button>
            <span> </span>
            <button
              onClick={() => handleDeckDelete(deck.id)}
              className="btn btn-danger"
            >
              Trush
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DeckList;
