function Deck({ decks }) {
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
