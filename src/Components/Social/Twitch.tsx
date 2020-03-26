import React, { useState, useEffect } from "react";
import { TwitchPlayer } from "react-twitch-embed";
import { getTwitchInfo } from "../../Services/Twitch";
import GlobalDetails from "../../GlobalDetails";
import { TwitchUser } from "../../Types/Twitch";

export const Twitch = () => {
  const [details, setDetails] = useState<TwitchUser>();

  useEffect(() => {
    getTwitchInfo(GlobalDetails.twitchLogin).then(data => {
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
        <TwitchPlayer
          channel={`${GlobalDetails.twitchLogin}`}
          theme="dark"
          withChat="False"
          muted
        />
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};
