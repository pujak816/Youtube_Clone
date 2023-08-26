import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const WatchPageInfo = ({ info }) => {
  let [searchParams] = useSearchParams();
  //   console.log(searchParams.get("v"));

  const { channelId } = info?.snippet;

  const [commentInfo, setCommentInfo] = useState([]);

  const GOOGLE_API_KEY = "AIzaSyBnqsmZe_k3S-0MSEi_yJCPtQZs5zU8Ng8";

  useEffect(() => {
    loadComments();
  }, []);

  const loadComments = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&allThreadsRelatedToChannelId=${channelId}&key=` +
        GOOGLE_API_KEY
    );
    const json = await data.json();
    // console.log(json.items);
    setCommentInfo(json.items);
  };

  return (
    <div>
      {commentInfo.map(
        (item) =>
          item.snippet.videoId === searchParams.get("v") && (
            <CommentsContainer key={item.id} commentInfo={item} />
          )
      )}
    </div>
  );
};

export default WatchPageInfo;
