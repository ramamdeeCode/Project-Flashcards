import { Link, useHistory } from "react-router-dom";

import { deleteDeck } from "../utils/api/index";
function Deck({ deck, deckId }) {
  const history = useHistory();

  // delete handler for deck
  const handleDeleteDeck = async (event) => {
    if (
      window.confirm(`Delete this deck? You will not be able to recover it.`)
    ) {
      await deleteDeck(event);
      history.push("/");
    }
  };
  return (
    <div className="card border-0 my-3">
      <div className="card-body">
        <h2 className="card-title">{deck.name}</h2>
        <p>{deck.description}</p>
        <Link
          to={`/decks/${deckId}/edit`}
          type="button"
          className="btn btn-secondary mx-1"
        >
          <span className="oi oi-pencil mr-2"></span>
          Edit
        </Link>
        <Link
          to={`/decks/${deckId}/study`}
          type="button"
          className="btn btn-primary mx-1"
        >
          <span className="oi oi-book mr-2"></span>
          Study
        </Link>
        <Link
          to={`/decks/${deckId}/cards/new`}
          type="button"
          className="btn btn-success mx-1"
        >
          <span className="oi oi-plus mr-2"></span>
          Add Cards
        </Link>
        <button
          type="button"
          className="btn btn-danger mx-1 float-right"
          onClick={() => handleDeleteDeck(deck.id)}
        >
          <span className="oi oi-trash mr-2"></span>
          Delete
        </button>
      </div>
    </div>
  );
}
export default Deck;
