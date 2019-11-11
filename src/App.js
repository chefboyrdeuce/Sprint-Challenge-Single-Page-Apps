import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import EpisodeList from "./components/EpisodeList.js";
import WelcomePage from "./components/WelcomePage.js";
import LocationList from "./components/LocationList.js";
import { Route } from 'react-router-dom';

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/CharacterList" component={CharacterList} />
      <Route path="/LocationList" component={LocationList} />
      <Route path="/EpisodeList" component={EpisodeList} />
    </main>
  );
}