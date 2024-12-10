const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const YOUTUBE_POPULAR_VIDEOS_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=example&key=" +
  GOOGLE_API_KEY;

export const YOUTUB_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
