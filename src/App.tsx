import React from "react";
import { Instagram } from "./Components/Social/Instagram";
import { Twitter } from "./Components/Social/Twitter";
import { Mixer } from "./Components/Social/Mixer";
import { Youtube } from "./Components/Social/Youtube";
import { Twitch } from "./Components/Social/Twitch";
import { Footer } from "./Components/Footer/Footer";

import "./Styling/Social.css";
import "./Styling/Footer.css";
import { GlobalDetails } from "./GlobalDetails";

const App = () => {
  let SocialComponents = [Instagram, Twitter, Mixer, Youtube, Twitch];

  return (
    <div className="App">
      {SocialComponents.map((Comp, index) => {
        if (
          Comp.name in GlobalDetails &&
          GlobalDetails[Comp.name].render === true
        ) {
          return <Comp key={index} />;
        }
      })}
      <Footer />
    </div>
  );
};

export default App;
