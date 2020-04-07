import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => (
  //  Map over the array of exampleData to create a List Entry for every object in the data set
  <div className="video-list">{props.videos.map((video) => (
    <VideoListEntry video={video}/>
  ))}
  </div>
);


// <div className="video-list">
//   {/* Should have one videoList div
//   When enter VideoListEntry component, pass in props Video Title and Video Description */}



//   <div><h5><em>videoListEntry</em> view goes here</h5></div>
//   <div><h5><em>videoListEntry</em> view goes here</h5></div>
//   <div><h5><em>videoListEntry</em> view goes here</h5></div>
//   <div><h5><em>videoListEntry</em> view goes here</h5></div>
//   <div><h5><em>videoListEntry</em> view goes here</h5></div>
// </div>;


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
