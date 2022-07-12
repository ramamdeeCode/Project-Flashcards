// import { Link, useHistory } from "react-router-dom";
// import { createDeck } from "../../utils/api/index";

// function CreateDeck() {
//   const history = useHistory();

//   //handle deck state
//   //const [decks, setDecks] = useState([]);

//   //set form initial values
//   const initialFormState = { id: decks.length + 1, name: "", description: "" };

//   //handle form state
//   const [formData, setFormData] = useState({
//     ...initialFormState,
//   });

//   //handle form value change
//   const handleFormChange = ({ target }) => {
//     setFormData({
//       ...formData,
//       [target.name]: target.value,
//       [target.description]: target.value,
//     });
//   };

//   async function deckCreate() {
//     try {
//       const newDeck = await createDeck(formData);
//       history.push(`/decks/${newDeck.id}`);
//     } catch (error) {
//       if (error === !"AbortError") {
//         throw error;
//       }
//     }
//   }

//   //handle form submit, createDeck, and setback form to initial value
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     deckCreate();
//     // deckCreate();
//     // console.log("on handle submit:", decks.length);
//     // console.log("Submitted:", formData);
//     // setFormData({ ...initialFormState });
//     // history.push("/DeckSreen");
//   };

//   return (
//     <div>
//       <div style={{ background: "#EBEBEB", padding: "10px", color: "#ABB0B8" }}>
//         <Link to={"/"}>Home</Link> /<span> Create deck</span>
//       </div>
//       <h1>Create Deck</h1>

//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name</label>
//         <br />
//         <input
//           id="name"
//           name="name"
//           type="text"
//           onChange={handleFormChange}
//           value={formData.name}
//           placeholder="name"
//           style={{ width: "100%" }}
//         />
//         <br />
//         <label htmlFor="description">Subsription</label>
//         <br />
//         <textarea
//           id="description"
//           name="description"
//           type="text"
//           onChange={handleFormChange}
//           value={formData.description}
//           placeholder="Brief description of the deck"
//           style={{ width: "100%" }}
//         />
//         <br />
//         <button className="btn btn-secondary">cancel</button>
//         <span> </span>
//         <button className="btn btn-primary" type="submit">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }
// export default CreateDeck;
