import VideoList from '../../src/components/VideoList.js';
import exampleVideoData from '../../src/data/exampleVideoData.js';
import VideoPlayer from '../../src/components/VideoPlayer.js';
import Search from '../../src/components/Search.js';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
        selected: exampleVideoData[0]
    }
  }

  titleOcclickHandler(video){
    this.setState({
      selected: video
    });
  }

  onclickSearchHandler(query){
    console.log(query)
  }

  render(){
    return(
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search onclickSearchHandler = {(query) => this.onclickSearchHandler(query)} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video= {this.state.selected} />
          </div>
          <div className="col-md-5">
            <VideoList titleOcclickHandler = {(video) => this.titleOcclickHandler(video)} videos = {exampleVideoData} />
          </div>
        </div>
      </div>
    )
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
