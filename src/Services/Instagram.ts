const ig = require("instagram-scraping");

const GetInstagramPosts = async (userName: string) => {
  let igData: any = await ig.scrapeUserPage(userName);
  return igData;
};

export default GetInstagramPosts;
