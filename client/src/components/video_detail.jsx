import React from 'react';


const VideoDetail = ({ video }) => {
  if (!video){
    return <div className='flex justify-center'>
              <button type="button" disabled>
                <svg className="motion-reduce:hidden border-2 rounded-full border-solid border-x-violet-700 animate-spin ..." viewBox="0 0 24 24"></svg>
                  Loading..
              </button>
          </div>
  }


  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail flex flex-col justify-center items-center">
      <div className="embed w-6/12 h-60">
        <iframe className="w-full h-full" src={url}></iframe>
      </div>
      <div className="details text-sm flex flex-col justify-center items-center">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
