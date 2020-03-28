import React from "react";
import { GlobalDetails } from "../../GlobalDetails";
const {
  TwitterTimelineEmbed,
  TwitterFollowButton
} = require("react-twitter-embed");

export const Twitter = () => {
  return (
    <div className="social-div">
      <TwitterTimelineEmbed
        options={{
          tweetLimit: 10,
          width: "30vw"
        }}
        autoheight
        sourceType="profile"
        screenName={GlobalDetails.Twitter.string}
      />
      <TwitterFollowButton screenName={GlobalDetails.Twitter.string} />
    </div>
  );
};
