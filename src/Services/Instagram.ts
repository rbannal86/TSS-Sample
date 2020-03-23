const GetInstagramPosts = async (userName: string) => {
  let dataSetId: string = await apifySearch(userName);
  let dataSet: [] | void = await databaseFetch(dataSetId);
  console.log(dataSet);
  return dataSet;
};

const databaseFetch = async (dataSetId: string) => {
  let dataSetUrl = `https://api.apify.com/v2/datasets/${dataSetId}/items`;
  let results = await repeatTimeout(dataSetUrl);
  console.log(results);
  return results;
};

const apifySearch = async (userName: string) => {
  const baseUrl = `https://api.apify.com/v2/acts/jaroslavhejlek~instagram-scraper/runs?token=${process.env.REACT_APP_API_APIFY}`;
  const data = {
    search: userName,
    searchType: "user",
    resultsType: "details",
    searchLimit: 1,
    proxy: {
      useApifyProxy: true,
      apifyProxyGroups: []
    }
  };

  const apifySearch: any = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  let apifyResponse = await apifySearch.json();

  let dataSetId = await apifyResponse.data.defaultDatasetId;

  return dataSetId;
};

const repeatTimeout = async (
  url: string,
  instaData: [] = [],
  count: number = 0
) => {
  count = count + 1;
  console.log(count);
  setTimeout(async () => {
    instaData = await timeoutFetch(url);
    if (instaData.length === 0 && count < 10) {
      console.log("trying again");
      await repeatTimeout(url, instaData, count);
    } else {
      console.log(instaData);
      return instaData;
    }
  }, 5000);
};

const timeoutFetch = async (url: string) => {
  let dataset = await fetch(url);
  return await dataset.json();
};

export default GetInstagramPosts;
