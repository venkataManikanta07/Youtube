import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, id } = info;
  return (
    <div className="m-2 p-2 shadow-md">
      <img
        className="w-64"
        src={snippet.thumbnails.medium.url}
        alt="ThumbNail Image"
      />
      <h3 className="w-64 font-semibold mt-1">{snippet.title}</h3>
      <h6 className="font-medium font-mono mt-1">{snippet.channelTitle}</h6>
    </div>
  );
};

export default VideoCard;
