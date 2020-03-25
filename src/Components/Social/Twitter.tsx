import React from "react";
import Details from "../../Details";
const {
  TwitterTimelineEmbed,
  TwitterFollowButton
} = require("react-twitter-embed");

const Twitter = () => {
  return (
    <div>
      <TwitterTimelineEmbed
        options={{
          tweetLimit: 10,
          width: "30vw"
        }}
        autoheight
        sourceType="profile"
        screenName={Details.twitter}
      />
      <TwitterFollowButton screenName={Details.twitter} />
    </div>
  );
};

export default Twitter;
