import VideoListEntry from '../../src/components/VideoListEntry.js';

var VideoList = (props) => (
  <div className="video-list">
    {
      props.videos.map((item, i) => <VideoListEntry key={i} titleOcclickHandler= {(video) => props.titleOcclickHandler(video)} video={item} />)
    }
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
