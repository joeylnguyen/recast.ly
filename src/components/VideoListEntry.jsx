var VideoListEntry = (props) => (

  <div className="video-list-entry media">
    <div className="media-left media-middle">
      {/* Pass in default thumbnail */}
      <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt="https://i.ytimg.com/vi/1w8Z0UOXVaY/default.jpg" />
    </div>
    <div className="media-body">
      {/* Pass in tiltle and description */}
      {/* Set a onClick event listener that uses the onClickPlayVideo prop we passed from the parent components */}
      <div className="video-list-entry-title" onClick={() => props.onClickPlayVideo(props.video)}>{props.video.snippet.title}</div>
      <div className="video-list-entry-detail">{props.video.snippet.description}</div>
    </div>
  </div>
);

// title={props.videos.snippet.title} description={props.videos.snippet.description} thumbnail={props.videos.snippet.thumbnails.default.url}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
