import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { createDeck } from "../utils/api/index";

function CreateDeck() {
  const history = useHistory();

  //set form initial values
  const initialFormState = { name: "", description: "" };

  //handle form state
  const [formData, setFormData] = useState({
    ...initialFormState,
  });

  // handle form value change
  const handleFormChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  // const handleNameChange = (event) => {
  //   setFormData({
  //     ...formData,
  //     name: event.target.value,
  //   });
  // };
  // const handleDescriptionChange = (event) => {
  //   setFormData({
  //     ...formData,
  //     description: event.target.value,
  //   });
  // };
  // create deck and push the deck.id page on submit
  async function deckCreate() {
    try {
      const newDeck = await createDeck(formData);
      history.push(`/decks/${newDeck.id}`);
    } catch (error) {
      if (error === !"AbortError") {
        throw error;
      }
    }
  }

  //handle form submit, createDeck, and setback form to initial value
  const handleSubmit = async (event) => {
    event.preventDefault();

    deckCreate();
  };

  return (
    <div>
      <div style={{ background: "#EBEBEB", padding: "10px", color: "#ABB0B8" }}>
        <Link to={"/"}>Home</Link> /<span> Create deck</span>
      </div>
      <h1>Create Deck</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <br />
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleFormChange}
          placeholder="name"
          style={{ width: "100%" }}
        />
        <br />
        <label htmlFor="description">Subsription</label>
        <br />
        <textarea
          id="description"
          name="description"
          type="text"
          value={formData.description}
          onChange={handleFormChange}
          placeholder="Brief description of the deck"
          style={{ width: "100%" }}
        />
        <br />
        <button
          className="btn btn-secondary"
          onClick={() => {
            history.push("/");
          }}
        >
          cancel
        </button>
        <span> </span>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
export default CreateDeck;
