import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { createCard, readDeck } from "../utils/api";

import Cardform from "./CardForm";

function AddCard() {
  const history = useHistory();
  const { deckId } = useParams();
  const [deck, setDeck] = useState([]);

  const initialFormState = {
    front: "",
    back: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  //load deck data
  useEffect(() => {
    const abortController = new AbortController();
    async function loadData() {
      try {
        const response = await readDeck(deckId, abortController.signal);
        console.log("resspnse", response);
        setDeck(response);
      } catch (e) {
        console.log(e.name);
      }
      return () => {
        abortController.abort();
      };
    }
    loadData();
  }, [deckId]);

  // form change handler
  const handleFormFrontChange = ({ target }) => {
    setFormData({ ...formData, front: target.value });
  };

  const handleFormBackChange = ({ target }) => {
    setFormData({ ...formData, back: target.value });
  };

  // handle submit
  const submitHandler = async (event) => {
    event.preventDefault();
    await createCard(deckId, formData);
    setFormData(initialFormState);
  };
  console.log();
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
          <li className="breadcrumb-item active">Add Card</li>
        </ol>
      </nav>

      <h1>{deck.name}: Add Card</h1>

      <Cardform
        deck={deck}
        formData={formData}
        handleFormFrontChange={handleFormFrontChange}
        handleFormBackChange={handleFormBackChange}
      />

      <button
        className="btn btn-secondary mx-1 my-3"
        onClick={() => history.push(`/decks/${deckId}`)}
      >
        Done
      </button>
      <button className="btn btn-secondary mx-1 my-3" onClick={submitHandler}>
        Save
      </button>
    </div>
  );
}

export default AddCard;
