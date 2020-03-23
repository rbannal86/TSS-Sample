type YTSnippet = {
  title: string;
  description: string;
  customUrl: string;
  thumbnails: any;
};

const GetLatestYoutube = async (name: string) => {
  const nameSearch = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=id,snippet&forUsername=${name}&key=${process.env.REACT_APP_API_YOUTUBE}`
  );
  const nameResults = await nameSearch.json();
  const channelId: string = await nameResults.items[0].id;
  const snippet: YTSnippet = await nameResults.items[0].snippet;
  const thumbnailHigh: string = await snippet.thumbnails.high.url;
  const idSearch = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=id&channelId=${channelId}&maxResults=1&order=date&key=${process.env.REACT_APP_API_YOUTUBE}`
  );
  const idResults = await idSearch.json();

  const YoutubeInfo = {
    channelId,
    title: snippet.title,
    description: snippet.description,
    customUrl: snippet.customUrl,
    thumbnail: thumbnailHigh,
    latestVideoId: idResults.items[0].id.videoId
  };
  return YoutubeInfo;
};

export default GetLatestYoutube;
