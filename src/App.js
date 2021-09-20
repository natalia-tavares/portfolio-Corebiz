import React from "react";
import { data } from "./data.js";
import "./App.css";

import Hero from "./components/Hero/index";
import Posts from "./components/Posts/index";
import Navigation from "./components/Navigation/index";

const App = () => {
  return (
   <main className="main">
      <Hero {...data.user}/>
      <Navigation {...data.navigation}/>
      <Posts content={data.content}/>
   </main>
  );
}

export default App;