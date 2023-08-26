import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addmessage } from "../utils/chatSlice";
import { generate, generateRandomMessage } from "../utils/helper";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SendIcon from "@mui/icons-material/Send";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const ChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //API polling
      //   console.log("API POlling");
      dispatch(
        addmessage({
          name: generate(),
          message: generateRandomMessage(20),
        })
      );
    }, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="p-1 mx-5 w-full">
      <div className=" border border-gray-200 h-[400px] overflow-y-scroll flex flex-col-reverse">
        {ChatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className=" p-1 py-2 border border-gray-200 justify-between"
        onSubmit={(e) => {
          e.preventDefault();
          //   console.log("submit");
          dispatch(
            addmessage({
              name: "Puja Singh",
              message: liveMessage,
            })
          );
        }}
      >
        <div className="items-center flex my-1 gap-2">
          <span>
            <AccountCircleIcon />
          </span>
          <span className="text-sm text-gray-600 font-semibold">
            Puja Singh
          </span>
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="Chat.."
            className="w-full mr-2 p-1 border-b-2 rounded-md  "
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
          />
          <button className="text-gray-500 px-1 text-xs rounded-xl">
            <SendIcon />
          </button>
        </div>
      </form>
    </div>
  );
};

export default LiveChat;
