import React from "react";
import { Instagram } from "./Components/Social/Instagram";
import { Twitter } from "./Components/Social/Twitter";
import { Mixer } from "./Components/Social/Mixer";
import { Youtube } from "./Components/Social/Youtube";
import { Twitch } from "./Components/Social/Twitch";
import { Footer } from "./Components/Footer/Footer";

import "./Styling/Social.css";
import "./Styling/Footer.css";
import GlobalDetails from "./GlobalDetails";

const App = () => {
  let SocialComponents = [Twitch, Instagram, Twitter, Youtube, Mixer];

  return (
    <div className="App">
      {SocialComponents.map((Item: any, index: number) => {
        if (Item.name in GlobalDetails) {
          return <Item key={index} />;
        } else {
          return null;
        }
      })}
      <Footer />
    </div>
  );
};

export default App;
