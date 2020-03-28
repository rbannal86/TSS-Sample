import React, { useState, useEffect } from "react";
import { getTwitchInfo } from "../../Services/Twitch";
import GlobalDetails from "../../GlobalDetails";
import { TwitchUser } from "../../Types/Twitch";
import ReactPlayer from "react-player";

import "../../Styling/Twitch.css";

export const Twitch = () => {
  const [details, setDetails] = useState<TwitchUser>();

  useEffect(() => {
    getTwitchInfo(GlobalDetails.Twitch).then(data => {
      setDetails(data);
    });
  }, []);

  if (details && details.display_name) {
    return (
      <div className="social-div">
        <h3>This contains twitch info to be parsed later</h3>
        <p>Display name: {details.display_name}</p>
        {details.broadcaster_type === "partner" ? <p>Partner: yep</p> : null}
        <p>Desc: {details.description}</p>
        <p>Total Views: {details.view_count}</p>
        <p>
          Logo:
          <img
            src={details.profile_image_url}
            alt={`${GlobalDetails.name}'s Logo`}
            height="42"
            width="42"
          />
        </p>
        <ReactPlayer
          url={`https://www.twitch.tv/${GlobalDetails.Twitch}`}
          className="twitch_player"
        />
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};
