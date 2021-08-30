import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import AllMeetups from "./Pages/AllMeetups";
import Favorites from "./Pages/Favorites";
import NewMeetup from "./Pages/NewMeetup";

function App() {
  return (
    <Layout>
      
      <Switch>
        <Route path="/" exact>
          <AllMeetups />
        </Route>
        <Route path="/new-meetup">
          <NewMeetup />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
