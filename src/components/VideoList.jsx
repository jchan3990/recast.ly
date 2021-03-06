import VideoListEntry from './VideoListEntry.js'

//insert list of video here
var VideoList = (props) => {
  var videos = props.videos;
  return (
    <div className="video-list">
        {videos.map(video=>
        <VideoListEntry video={video} changeState={props.changeState}/>
        )}
    </div>
    );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

//took out reactDOM for videolist because we already rendered through index


// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
