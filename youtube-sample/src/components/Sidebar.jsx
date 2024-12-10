import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { FaFlag } from "react-icons/fa6";
import {
  MdOutlineSubscriptions,
  MdOutlinePlaylistAdd,
  MdOutlineWatchLater,
} from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { LiaPhotoVideoSolid } from "react-icons/lia";
import { AiFillLike } from "react-icons/ai";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="w-[14vw] h-full">
      <div>
        <div className="flex mx-2 p-2">
          <IoHomeSharp size={28} />
          <h5 className="text-lg font-semibold ml-2 mt-1">Home</h5>
        </div>
        <div className="flex mx-2 p-2">
          <FaFlag size={28} />
          <h5 className="text-lg font-semibold ml-2 mt-1">Shorts</h5>
        </div>
        <div className="flex mx-2 p-2">
          <MdOutlineSubscriptions size={28} />
          <h5 className="text-lg font-semibold ml-2 mt-1">Subscription</h5>
        </div>
        <div></div>
        <div></div>
      </div>
      <div className="h-[1px] bg-gray-700 m-2"></div> {/* Separator Line */}
      <div className="mt-3">
        <div className="flex mx-2 p-2">
          <FaHistory size={28} className="mt-1" />
          <h5 className="text-lg font-semibold ml-2 mt-1">History</h5>
        </div>
        <div className="flex mx-2 p-2">
          <MdOutlinePlaylistAdd className="mt-1" size={28} />
          <h5 className="text-lg font-semibold ml-2 mt-1">Playlist</h5>
        </div>
        <div className="flex mx-2 p-2">
          <LiaPhotoVideoSolid className="mt-1" size={28} />
          <h5 className="text-lg font-semibold ml-2 mt-1">Your Videos</h5>
        </div>
        <div className="flex mx-2 p-2">
          <MdOutlineWatchLater className="mt-1" size={28} />
          <h5 className="text-lg font-semibold ml-2 mt-1">Watch Later</h5>
        </div>
        <div className="flex mx-2 p-2">
          <AiFillLike className="mt-1" size={28} />
          <h5 className="text-lg font-semibold ml-2 mt-1">Liked Videos</h5>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Sidebar;
