import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  console.log(searchParams.get("v"));
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="w-full">
      <div className="flex w-full">
        <div>
          <iframe
            width="1000"
            height="550"
            src={
              "https://www.youtube.com/embed/" +
              videoId +
              "?si=83M1OAWNp6NbHNpU"
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
            <LiveChat/>
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
