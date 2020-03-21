import React, { useState, useEffect } from "react";
import GetLatestYoutube from "../../Services/Youtube";
import Details from "../../Details";

const Youtube = () => {
  const [channelId, setChannelId] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [customUrl, setCustomUrl] = useState<string>();
  const [thumbnail, setThumbnail] = useState<string>();
  const [latestVideoId, setLatestVideoId] = useState<string>();

  const getYt = () =>
    GetLatestYoutube(Details.youtube).then(data => {
      setChannelId(data.channelId);
      setTitle(data.title);
      setThumbnail(data.thumbnails);
      setDescription(data.description);
      setCustomUrl(data.customUrl);
      setLatestVideoId(data.latestVideoId);
    });

  useEffect(() => {
    getYt();
  }, []);

  return (
    <div>
      <p>Channel id: {channelId}</p>
      <p>Title: {title}</p>
      <p>
        Logo: <img src={thumbnail} alt="Jake's Logo" height="42" width="42" />
      </p>
      <p>Desc: {description}</p>
      <p>
        Channel link: <a href={`http://youtube.com/${customUrl}`}>here</a>
      </p>
      <p>
        Latest Video:
        <a href={`https://www.youtube.com/watch?v=${latestVideoId}`}>here</a>
      </p>
    </div>
  );
};

export default Youtube;
