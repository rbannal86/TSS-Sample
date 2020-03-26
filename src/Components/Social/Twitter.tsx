import React from "react";
import GlobalDetails from "../../GlobalDetails";
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
        screenName={GlobalDetails.twitter}
      />
      <TwitterFollowButton screenName={GlobalDetails.twitter} />
    </div>
  );
};

export default Twitter;
