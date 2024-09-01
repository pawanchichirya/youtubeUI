import React from "react";

const VideoCard = ({ video }) => {
  const { snippet, statistics } = video;
  const { channeltitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-72 shadow-lg rounded-lg">
      <img src={thumbnails.medium.url} alt="image" className="" />
      <ul>
        <li className="font-bold px-2">{title}</li>
        <li>{channeltitle}</li>
        <li>{statistics.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
