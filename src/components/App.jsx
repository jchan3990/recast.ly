import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js'


//setState method to change with videolistentry
//bind to videolistentry
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: exampleVideoData[0],
      videoList: exampleVideoData
    };
    this.changeState = this.changeState.bind(this)
  }

  componentDidMount () {
    this.getYoutubeVideos('honda civics')
  }

  getYoutubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    }
    this.props.searchYouTube(options, (videos) => {
      this.setState({
        videoList: videos,
        currentVideo: videos[0]
      });
    });
  }
  // Parent = App.
  // Children = VideoPlayer and VideList
  // Need to go through parent to have children communicate

  // Change the state to new video
  changeState(video) {
    this.setState({
      currentVideo: video
    })
  }

  render() {

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearchInputChange={this.getYoutubeVideos.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videoList} changeState={this.changeState}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
