import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SongList from '../components/SongList';
import SongDetail from '../components/SongDetail';

class SongContainer extends React.Component {
  constructor(props){
    super(props)
      // this.handleSongSelected = this.handleSongSelected.bind(this);
      this.state = {
        songs: []
      };
  }

componentDidMount(){
  fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
  .then(response => response.json())
  .then(json => this.setState({songs: json}));
}

render(){
  return (
    <React.Fragment>
      <Header />
      <SongList
      songs={this.state.songs}/>
      <SongDetail
      song = {this.state.song}/>
      <Footer />
    </React.Fragment>

  )
}

}

export default SongContainer;
