import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: exampleVideoData[0],
      videos: exampleVideoData,
    };
  }

  // Create componentDidMount and invoke searchYouTube
  componentDidMount() {
    this.getVideo('puppies');
  }

  getVideo(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    };
    this.props.searchYouTube(options, (videos) =>{
      this.setState({
        videos: videos,
        video: videos[0]
      });
    });
  }
  // Create function that changes the state of the video being passed into VideoPlayer when clicking title on ListEntry
  onClickPlayVideo(video) {
    this.setState({
      video: video
    });
  }


  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em><Search searchInput={this.getVideo.bind(this)}/></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            {/* The video prop value will get updated dynamically because our click handler changes the state of the video */}
            <div><h5><em>videoPlayer</em><VideoPlayer video={this.state.video}/></h5></div>
          </div>
          <div className="col-md-5">
            {/* Pass in onClickPlayVideo click handler as a prop which will then get passed down to listEntry */}
            <div><h5><em>videoList</em><VideoList videos={this.state.videos} onClickPlayVideo={this.onClickPlayVideo.bind(this)}/></h5></div>
          </div>
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
