import React from "react";

const YouTubePlayer = ({ videoId }) => {
  return (
    <div className="w-90 aspect-w-16 aspect-h-9">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube Video"
        allowFullScreen
      />
    </div>
  );
};

export default YouTubePlayer;
