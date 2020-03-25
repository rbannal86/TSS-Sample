export const getTwitchInfo = async (twitchLogin: string) => {
  const getUser = await fetch(
    `https://api.twitch.tv/helix/users?login=${twitchLogin}`,
    {
      headers: {
        "Client-ID": `${process.env.REACT_APP_API_TWITCH}`
      }
    }
  );
  const userResult = await getUser.json();
  return userResult.data[0];
};
