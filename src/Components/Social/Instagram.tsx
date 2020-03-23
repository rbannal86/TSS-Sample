import React, { useState, useEffect } from "react";
import GetInstagramPosts from "../../Services/Instagram";
import Details from "../../Details";

const Instagram = () => {
  const [latest, setLatest] = useState<[]>([]);
  const [instaUrl, setInstaUrl] = useState<string>("");

  const getInsta = () => {
    GetInstagramPosts(Details.instagram).then(data => {
      console.log(data);
    });
  };

  useEffect(() => {
    getInsta();
  }, []);

  return (
    <div>
      <h3>INSTAGRAM</h3>
      <span>Future Image Gallery</span>
    </div>
  );
};

export default Instagram;
