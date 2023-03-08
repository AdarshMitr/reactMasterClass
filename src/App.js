import "./App.css";
import PlayButton from "./components/PlayButton";
import Video from "./components/Video";
import videos from "./data/data";
function App() {
  return (
    <div className="App" onClick={()=>console.log('App')}>
      <div>Videos</div>

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
    </div>
  );
}

export default App;
