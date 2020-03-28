import React, { useState, useEffect } from "react";
import GetLatestYoutube from "../../Services/Youtube";
import GlobalDetails from "../../GlobalDetails";
import { YTdetails } from "../../Types/Youtube";

// import YouTube from "react-youtube";
import ReactPlayer from "react-player";

export const Youtube = () => {
  const [details, setDetails] = useState<YTdetails>();

  useEffect(() => {
    GetLatestYoutube(GlobalDetails.Youtube).then(data => {
      setDetails(data);
    });
  }, []);

  if (details && details.channelId) {
    return (
      <div className="social-div">
        <h3>This contains youtube info to be parsed later</h3>
        <p>Channel id: {details.channelId}</p>
        <p>Title: {details.title}</p>
        <p>
          Logo:
          <img
            src={details!.thumbnail}
            alt={`${GlobalDetails.name}'s Logo`}
            height="42"
            width="42"
          />
        </p>
        <p>Desc: {details!.description}</p>
        <p>
          Channel link:
          <a href={`http://youtube.com/${details.customUrl}`}> here</a>
        </p>
        <p>Latest Video:</p>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${details.latestVideoId}`}
        />
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};
