import { listDecks } from "../utils/api/index";

import { useEffect, useState } from "react";

function DeckList() {
  const [decks, setDecks] = useState([]);

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
            <button className="btn btn-danger">Trush</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DeckList;
