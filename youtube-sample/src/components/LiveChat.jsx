import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
    let seconds = 0; 
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
        seconds += 2; 
      dispatch(
        addMessage({
          name: "Saini vikbash",
          message: "Loresm sample message random one " + seconds ,
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);
  return (
    <div className="border border-black w-full h-[550px] mx-3 p-1 overflow-y-scroll flex flex-col-reverse">
      {chatMessages.map((chat, index) => (
        <ChatMessage key={index} name={chat.name} message={chat.message} />
      ))}
    </div>
  );
};

export default LiveChat;
