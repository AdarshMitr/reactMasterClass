import "./App.css";
import { useState } from "react";
import PlayButton from "./components/PlayButton";
import Video from "./components/Video";
import videoDB from "./data/data";
import Counter from "./components/Counter";
function App() {
  console.log('render App')
  const [videos,setVideos]=useState(videoDB);
  return (
    <div className="App" onClick={()=>console.log('App')}>
      <div>
        <button onClick={()=>{
     
          setVideos([...videos,{id:videos.length+1,
            title:"Demo JS Tutorial",
                views:"41K",
                time:"8 months ago",
                channel:"AdarshMitr",
               verified:false,
          },]);
        }}>Add Video</button>
      </div>

      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
        >
          <PlayButton
            onPlay={() => console.log("Playing...",video.title)}
            onPause={() => console.log("Paused",video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
      <div style={{ clear: "both" }}>
        {/* <PlayButton message ="Start" onPlay={()=>console.log('Play the video')} onPause={()=>console.log('Pause the video')}>Play</PlayButton> */}
        {/* <PlayButton  message ="Stop" onSmash={()=>alert('Pause the video')}>Pause</PlayButton> */}
      </div>
      <Counter></Counter>
    </div>
  );
}

export default App;
