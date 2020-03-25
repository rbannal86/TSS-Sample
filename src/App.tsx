import React from "react";
import { Youtube } from "./Components/Social/Youtube";
import { Twitch } from "./Components/Social/Twitch";

import "./Components/Social/Social.css";

const App = () => {
  return (
    <div className="App">
      <Youtube />
      <Twitch />
    </div>
  );
};

export default App;
