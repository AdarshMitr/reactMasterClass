import "./Video.css";
function Video({ id,title, channel, views, time, verified,children }) {

  console.log('render PlayButton')
  return (
    <>
      <div className="container">
        <div className="pic">
          <img
            src={`https://picsum.photos/id/${id}/160/90
      `}
            alt="thumbnails"
          />
        </div>

        <div className="title">{title}</div>
        <div className="channel">{channel} {verified && "✅"}</div>

        <div className="views">
          {views} views <span>.</span> {time}
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}
export default Video;
