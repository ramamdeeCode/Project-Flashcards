import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function EnoughCards({ deck, numberOfCards }) {
  const history = useHistory();

  //set initial state
  const initialState = {
    Front: true,
    cardNumber: 0,
  };

  const [studyState, setStudyState] = useState(initialState);

  //flip button handler
  const handleFlip = (event) => {
    event.preventDefault();
    if (studyState.Front) {
      setStudyState({
        ...studyState,
        Front: false,
      });
    } else {
      setStudyState({
        ...studyState,
        Front: true,
      });
    }
  };

  //next button handler
  const handleNext = (event) => {
    event.preventDefault();
    if (studyState.cardNumber < deck.cards.length - 1) {
      setStudyState({
        ...studyState,
        cardNumber: studyState.cardNumber + 1,
        Front: true,
      });
    } else {
      const restart = window.confirm(
        "Restart cards? Click cancel to return to the home page."
      );
      if (restart) {
        setStudyState(initialState);
      } else {
        history.push("/");
      }
    }
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
            <Link to={`/decks/${deck.id}`}>{deck.name}</Link>
          </li>
          <li className="breadcrumb-item active">Study</li>
        </ol>
      </nav>

      <h1>Study: {deck.name}</h1>

      <div className="card">
        <div className="card-body">
          <div className="card-title">
            <h3>
              Card {studyState.cardNumber + 1} of {numberOfCards}
            </h3>
          </div>
          <div className="card-text my-3">
            {studyState.Front
              ? deck.cards[studyState.cardNumber].front
              : deck.cards[studyState.cardNumber].back}
          </div>
          <button className="btn btn-secondary mx-1" onClick={handleFlip}>
            Flip
          </button>
          {!studyState.Front && (
            <button className="btn btn-primary mx-1" onClick={handleNext}>
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
export default EnoughCards;
