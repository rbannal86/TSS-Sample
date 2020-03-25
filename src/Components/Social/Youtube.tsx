import React, { useState, useEffect } from "react";
import GetLatestYoutube from "../../Services/Youtube";
import Details from "../../Details";
import { YTdetails } from "../../Types/Youtube";

export const Youtube = () => {
  const [details, setDetails] = useState<YTdetails>();

  useEffect(() => {
    GetLatestYoutube(Details.youtube).then(data => {
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
            alt={`${Details.name}'s Logo`}
            height="42"
            width="42"
          />
        </p>
        <p>Desc: {details!.description}</p>
        <p>
          Channel link:
          <a href={`http://youtube.com/${details.customUrl}`}> here</a>
        </p>
        <p>
          Latest Video:
          <a href={`https://www.youtube.com/watch?v=${details.latestVideoId}`}>
            {" "}
            here
          </a>
        </p>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};
