// Use string to get channel ID
// googleapis.com/youtube/v3/channels?part=id&forUsername=/*string from details*/&key=[YOUR_API_KEY]
// use channel id to get latest upload
// googleapis.com/youtube/v3/search?part=id&channelId=/*id comes from previous query*/&maxResults=1&order=date&key=[YOUR_API_KEY]

const GetLatestYoutube = async (name: string) => {
  const nameSearch = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=id,snippet&forUsername=${name}&key=${process.env.REACT_APP_API_YOUTUBE}`
  );
  const nameResults = await nameSearch.json();
  const channelId: string = await nameResults.items[0].id;
  const snippet: any = await nameResults.items[0].snippet;
  const idSearch = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=id&channelId=${channelId}&maxResults=1&order=date&key=${process.env.REACT_APP_API_YOUTUBE}`
  );
  const idResults = await idSearch.json();

  const YoutubeInfo = {
    channelId,
    title: snippet.title,
    description: snippet.description,
    customUrl: snippet.customUrl,
    thumbnails: snippet.thumbnails.high.url,
    latestVideoId: idResults.items[0].id.videoId
  };
  return YoutubeInfo;
};

export default GetLatestYoutube;
