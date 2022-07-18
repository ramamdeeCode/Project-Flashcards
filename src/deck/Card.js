import { useHistory } from "react-router-dom";
import { deleteCard } from "../utils/api/index";

function Card({ cards, deck }) {
  const history = useHistory();
  //handle delete card
  const handleDeleteCard = async (event) => {
    if (
      window.confirm(`Delete this card? You will not be able to recover it.`)
    ) {
      await deleteCard(event);
      history.go(0);
    }
  };
  return (
    <>
      <h2>Cards</h2>

      {cards.map((card) => {
        {
          console.log("cards from map", cards);
        }
        return (
          <div className="card-deck" key={card.id}>
            <div className="card my-1">
              <div className="row">
                <div className="col mx-3 my-2">{card.front}</div>
                <div className="col mx-3 my-2">{card.back}</div>
                <div className="container">
                  <button
                    type="button"
                    className="btn btn-danger mx-2 my-2 float-right"
                    onClick={() => handleDeleteCard(card.id)}
                  >
                    <span className="oi oi-trash mr-2"></span>
                    Delete
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary mx-1 my-2 float-right"
                    onClick={() =>
                      history.push(`/decks/${deck.id}/cards/${card.id}/edit`)
                    }
                  >
                    <span className="oi oi-pencil mr-2"></span>
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default Card;
