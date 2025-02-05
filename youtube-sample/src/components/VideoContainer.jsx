import React, { useEffect, useState } from "react";
import { YOUTUBE_POPULAR_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      console.log("Google API Key:", process.env.REACT_APP_GOOGLE_API_KEY);
      const response = await fetch(YOUTUBE_POPULAR_VIDEOS_API);
      const jsonData = await response.json();
      console.log("inside vc ")
      console.log(jsonData);
      

      if (jsonData.items) {
        setVideos(jsonData.items);
      } else {
        console.error("No items in API response", jsonData);
      }
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  return (
    <div className="flex flex-wrap overflow-auto">
      {videos.length === 0 ? (
        <p className="p-4 m-4 font-bold text-3xl ">Loading videos...</p>
      ) : (
        videos.map((video) => (
          <Link key={video.id.videoId} to={"/watch?v=" + video.id.videoId}>
            <VideoCard info={video} />
          </Link>
        ))
      )}
    </div>
  );
};

export default VideoContainer;
