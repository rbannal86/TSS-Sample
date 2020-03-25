import React from "react";
import { Youtube } from "./Components/Social/Youtube";
import { Twitch } from "./Components/Social/Twitch";
import { Footer } from "./Components/Footer/Footer";

import "./Components/Social/Social.css";
import "./Components/Footer/Footer.css";

const App = () => {
  return (
    <div className="App">
      <Youtube />
      <Twitch />
      <Footer />
    </div>
  );
};

export default App;
