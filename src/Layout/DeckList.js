import { useEffect, useState } from "react";

function Deck() {
  const [decks, setDecks] = useState([]);

  // fetching all the decks from api and set the in the decks using setDecks
  useEffect(() => {
    async function loadData() {
      const response = await fetch("http://localhost:8080/decks/");
      const fetchedData = await response.json();
      setDecks(fetchedData);
    }
    loadData();
  }, []);

  // this function is responsible for adding new deck
  const createDeck = (newDeck) => {
    setDecks([...decks, newDeck]);
  };
  console.log(decks);
  return (
    <div>
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

export default Deck;
