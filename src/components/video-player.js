const VideoPlayer = ({ videoUrl }) => {
    return (
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src={videoUrl}
          title="Video player"
          allowFullScreen
        />
      </div>
    );
  };
  
  export default VideoPlayer;
  