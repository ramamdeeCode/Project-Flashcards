import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "./Header";
import NotFound from "./NotFound";
import DeckList from "./DeckList";
import CreateDeck from "./CreateDeck";
import BtnCreate from "./BtnCreate";

function Layout() {
  const [decks, setDecks] = useState([]);

  // fetching all the decks from api and set the in the decks using setDecks
  useEffect(() => {
    async function loadData() {
      const response = await fetch("http://localhost:8080/decks/");
      const fetchedData = await response.json();
      setDecks(fetchedData);
    }
    loadData();
  }, []);

  // this function is responsible for adding new deck
  const createDeck = (newDeck) => {
    setDecks([...decks, newDeck]);
  };

  return (
    <Router>
      <Header />

      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path={"/"}>
            <BtnCreate />
            <br />
            <DeckList decks={decks} />
          </Route>
          <Route exact path={"/new"}>
            <CreateDeck createDeck={createDeck} />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Layout;
