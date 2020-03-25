import React from "react";
import Instagram from "./Components/Social/Instagram";
import Twitter from "./Components/Social/Twitter";
import Mixer from "./Components/Social/Mixer";
import { Youtube } from "./Components/Social/Youtube";
import { Twitch } from "./Components/Social/Twitch";
import { Footer } from "./Components/Footer/Footer";

import "./Components/Social/Social.css";
import "./Components/Footer/Footer.css";

const App = () => {
  return (
    <div className="App">
      <Youtube />
      <Instagram />
      <Twitter />
      <Mixer />
      <Twitch />
      <Footer />
    </div>
  );
};

export default App;
