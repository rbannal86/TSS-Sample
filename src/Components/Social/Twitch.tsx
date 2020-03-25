import React, { useState, useEffect } from "react";
import { getTwitchInfo } from "../../Services/Twitch";

import Details from "../../Details";
import { TwitchUser } from "../../Types/Twitch";

export const Twitch = () => {
  const [details, setDetails] = useState<TwitchUser>();

  useEffect(() => {
    getTwitchInfo(Details.twitchLogin).then(data => {
      setDetails(data);
    });
  }, []);

  //   console.log(details);

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
            alt={`${Details.name}'s Logo`}
            height="42"
            width="42"
          />
        </p>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};
