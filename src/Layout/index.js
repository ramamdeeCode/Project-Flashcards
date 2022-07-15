import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import NotFound from "./NotFound";
import DeckList from "../components/DeckList";
import BtnCreate from "../components/BtnCreate";
import CreateDeck from "../components/CreateDeck";
import ViewDeck from "../components/ViewDeck";
import StudyDeck from "../components/StudyDeck";
import EditDeck from "../components/EditDeck";

function Layout() {
  return (
    <>
      <Header />
      <Router>
        <div className="container">
          {/* TODO: Implement the screen starting here */}
          <Switch>
            <Route exact path={"/"}>
              <BtnCreate />
              <br />
              <DeckList />
            </Route>
            <Route exact path={"/decks/new"}>
              <CreateDeck />
            </Route>
            <Route exact path={"/decks/:deckId"}>
              <ViewDeck />
            </Route>
            <Route path="/decks/:deckId/edit">
              <EditDeck />
            </Route>
            <Route path="/decks/:deckId/study">
              <StudyDeck />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default Layout;
