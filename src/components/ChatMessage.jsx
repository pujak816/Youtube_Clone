import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const ChatMessage = ({ name, message }) => {
  return (
    <>
      <div className="flex px-3 py-1 my-1 justify-left text-sm hover:bg-slate-100 cursor-pointer ">
        <AccountCircleIcon />
        <span className="text-gray-500 font-semibold ml-1">{name}</span>
        <span className="-400  ml-2">{message}</span>
      </div>
    </>
  );
};

export default ChatMessage;
