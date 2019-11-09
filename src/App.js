
import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import EpisodeList from "./components/EpisodeList";
import WelcomePage from "./components/WelcomePage.js";
import LocationList from "./components/LocationsList";



export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <WelcomePage />
    </main>
  );
}