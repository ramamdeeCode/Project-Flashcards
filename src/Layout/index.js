import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import NotFound from "./NotFound";
import DeckList from "../decksComponents/DeckList";
import BtnCreate from "../decksComponents/BtnCreate";
import CreateDeck from "../decksComponents/CreateDeck";
import ViewDeck from "../decksComponents/ViewDeck";
import StudyDeck from "../decksComponents/StudyDeck";
import EditDeck from "../decksComponents/EditDeck";

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
