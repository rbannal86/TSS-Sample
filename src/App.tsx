import React, { useEffect } from "react";
import GetInstagramPosts from "./Services/Instagram";
import Youtube from "./Components/Social/Youtube";
// import Details from "./Details";

const App = () => {
  useEffect(() => {
    GetInstagramPosts("gernaderjake");
  });

  return (
    <div className="App">
      <p>app div</p>
      <Youtube />
    </div>
  );
};

export default App;
