import React from "react";
import { Link } from "react-router-dom";

function BtnCreate() {
  return (
    <>
      <Link to={"/decks/new"}>
        <button className="btn btn-secondary"> + Create Deck</button>
        <br />
      </Link>
    </>
  );
}
export default BtnCreate;
