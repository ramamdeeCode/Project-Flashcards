import { useState } from "react";
import { Link } from "react-router-dom";

function CreateDeck({ createDeck }) {
  const initialFormState = { name: "", description: "" };
  const [formData, setFormData] = useState({
    ...initialFormState,
  });

  const handleFormChange = null;

  const handleSubmit = null;

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
          onChange={handleFormChange}
          value={formData.name}
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
          onChange={handleFormChange}
          value={formData.description}
          placeholder="Brief description of the deck"
          style={{ width: "100%" }}
        />
        <br />
        <button className="btn btn-secondary">cancel</button>
        <span> </span>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
export default CreateDeck;
