const GetInstagramPosts = async (userName: string) => {
  const baseUrl =
    "https://api.apify.com/v2/acts/jaroslavhejlek~instagram-scraper/runs?token=MwfrBz2ncyn2SBKrQW9mpAGcm";
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
  let dataSetUrl = `https://api.apify.com/v2/datasets/${dataSetId}/items`;

  // let dataset: any = await fetch(dataSetUrl);
  // let datasetResponse = await dataset.json();
  // console.log(datasetResponse);
  let instaData: [] = await repeatTimeout(dataSetUrl);
  // let latestPosts = await instaData[0].latestPosts;
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
      repeatTimeout(url, instaData, count);
    }
  }, 5000);

  return instaData;
};

const timeoutFetch = async (url: string) => {
  let dataset = await fetch(url);
  let datasetResponse = await dataset.json();
  console.log(datasetResponse);
  return datasetResponse;
};

export default GetInstagramPosts;
