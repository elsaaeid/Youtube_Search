import React, { useState } from 'react';
import "./App.css";
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import { useEffect } from 'react';


//for exmaple

const App = ()=> {
const [videos, setVideos] = useState([]);
const [selectedVideo, setSelectedVideo] = useState(null);




const onSearchTermChange = term=> {
  YTSearch({ key: process.env.API_KEY, term: term }, videos => {
    setVideos(videos);

    setSelectedVideo(videos[0])

  });
}
 onSearchTermChange('react js');
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearchTermChange()
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  
    return (
      <div>
        <h5 className='text-center mt-10'>Youtube Search:</h5>
        <SearchBar onSearchTermChange={onSearchTermChange} />
        <VideoDetail video={selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => setSelectedVideo(selectedVideo)}
          videos={videos}/>
      </div>
    );
}

export default App;