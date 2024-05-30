import React, { useState } from 'react';
import { LikeButton } from './LikeButton';

const VideoListItem = ({video, onVideoSelect}) => {
  const [isActive, setActive] = useState(true);
  const imageUrl = video.snippet.thumbnails.default.url;
  const mediaTitle = video.snippet.title;

  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <li className="hover:bg-sky-200">
      <div className="video-list flex flex-col justify-between items-center">
        <div className="media-img">
          <img src={imageUrl} />
        </div>
        <div onClick={() => onVideoSelect(video)} className="media-heading cursor-pointer">
          <h4>{mediaTitle}</h4>
        </div>
        <div className='media-icon'>
          <LikeButton isActive={isActive} toggleClass={toggleClass} />
        </div>
      </div>
    </li>
  )
};

export default VideoListItem;