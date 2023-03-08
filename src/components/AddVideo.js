import React from "react";
import { useState } from "react";
import "./AddVideo.css";

const initialState={
  time: "8 months ago",
  channel: "AdarshMitr",
  verified: true,
  title: '',
  views: '',
}
export default function AddVideo({addVideos}) {
 
    const [video, setVideo] = useState(initialState);
  
  function handleSubmit(e) {
    e.preventDefault();
    addVideos(video)
    setVideo(initialState);
  }
 
  function handleChange(e) {
   
    setVideo({ ...video, [e.target.name] : e.target.value });
    
  }
  return (
    <form>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="Title"
        value={video.title}
      />
      <input
        type="text"
        name="views"
        onChange={handleChange}
        placeholder="Views"
        value={video.views}
      />
      <button
        onClick={handleSubmit}
        // onClick={() => {
        //  
        // }}
      >
        Add Video
      </button>
    </form>
  );
}
