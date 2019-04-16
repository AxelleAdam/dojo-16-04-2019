import React from "react";
import axios from "axios";
import Youtube from "react-youtube";

class Band extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoId: ""
    };
  }

  componentDidMount() {
    const apiKey = "AIzaSyAYQjF7_hRZGUMoUwlcUezlq33cGFz5SO0";
    const query = `${this.props.bandData.title} band`;

    axios
      .create({
        baseURL: "https://content.googleapis.com/youtube/v3",
        timeout: 1000
      })
      .get(
        `/search?q=${query}&part=snippet&maxResults=1&type=video&key=${apiKey}`
      )
      .then(response => {
        const vidId = response.data.items[0].id.videoId;
        this.setState({ videoId: vidId });
      })
      .catch(function(error) {
        console.log("Echec appel API Youtube: " + error);
      });
  }

    handleDelete() {
      //console.log(this.state.videoId);
      this.props.deleteFunction(this.props.bandData.id);
      
    }
  render() {
    return (
      <React.Fragment>
        <h2>
          {this.props.bandData.title} (by {this.props.bandData.author})
        </h2>
        <Youtube videoId={this.state.videoId} />
        <button onClick={()=>{this.handleDelete()}}>Supprimer</button>
      </React.Fragment>
    );
  }
}
export default Band;
