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
        <div className="card my-1" key={deck.id}>
          <div className="card-body">
            <div className="card-title">
              <h3>{`${deck.name}`}</h3>
            </div>
            <div className="card-subtitle">
              {deck.cards.length === 1 ? (
                <h6>{`${deck.cards.length} card`}</h6>
              ) : (
                <h6>{`${deck.cards.length} cards`}</h6>
              )}
            </div>
            <div className="card-text">{`${deck.description}`}</div>
            <button
              type="button"
              className="btn btn-secondary mx-1 mt-3"
              onClick={() => history.push(`/decks/${deck.id}`)}
            >
              <span className="oi oi-eye mr-2"></span>
              View
            </button>
            <button
              type="button"
              className="btn btn-primary mx-1 mt-3"
              onClick={() => history.push(`/decks/${deck.id}/study`)}
            >
              <span className="oi oi-book mr-2"></span>
              Study
            </button>
            <button
              type="button"
              className="btn btn-danger mx-1 mt-3 float-right"
              onClick={() => handleDeckDelete(deck.id)}
            >
              <span className="oi oi-trash mr-2"></span>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DeckList;
