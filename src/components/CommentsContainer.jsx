import React from "react";
import ReactTimeAgo from "react-time-ago";

function CommentsContainer({ commentInfo }) {
  const { authorDisplayName, authorProfileImageUrl, publishedAt, textDisplay } =
    commentInfo?.snippet?.topLevelComment?.snippet;

  return (
    <div className="m-2 py-2 flex gap-4">
      <div>
        <img src={authorProfileImageUrl} className="rounded-full " alt="img" />
      </div>
      <div>
        <div className="flex gap-2 items-center">
          <p className="font-semibold">{authorDisplayName}</p>
          <p className="text-gray-500 text-xs">
            <ReactTimeAgo date={publishedAt} locale="en-US" />
          </p>
        </div>
        <p className="text-gray-900 text-sm">{textDisplay}</p>
      </div>
    </div>
  );
}

export default CommentsContainer;
