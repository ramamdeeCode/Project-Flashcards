import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { readCard, readDeck, updateCard } from "../utils/api";

import CardForm from "./CardForm";

function EditCard() {
  const history = useHistory();
  const { deckId, cardId } = useParams();
  const [deck, setDeck] = useState({});
  const [card, setCard] = useState({});

  //fetch and laod data
  useEffect(() => {
    const abortController = new AbortController();
    async function loadData() {
      try {
        const fetchDeck = await readDeck(deckId, abortController.signal);
        setDeck(fetchDeck);
        const fetchCard = await readCard(cardId, abortController.signal);

        setCard(fetchCard);
      } catch (e) {
        console.log(e.name);
      }
      return () => {
        abortController.abort();
      };
    }
    loadData();
  }, [deckId, cardId]);

  // form change handler
  const handleFormFrontChange = ({ target }) => {
    setCard({ ...card, front: target.value });
  };

  const handleFormBackChange = ({ target }) => {
    setCard({ ...card, back: target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    await updateCard(card);
    history.push(`/decks/${deckId}`);
  };

  return (
    <div>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home mr-1" />
              Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${deckId}`}>{deck.name}</Link>
          </li>
          <li className="breadcrumb-item active">Edit Card</li>
        </ol>
      </nav>

      <h1>Edit Card</h1>

      <CardForm
        formData={card}
        handleFormFrontChange={handleFormFrontChange}
        handleFormBackChange={handleFormBackChange}
      />

      <button
        className="btn btn-secondary mx-1 my-3"
        onClick={() => history.push(`/decks/${deckId}`)}
      >
        Cancel
      </button>
      <button className="btn btn-secondary mx-1 my-3" onClick={submitHandler}>
        Submit
      </button>
    </div>
  );
}
export default EditCard;
