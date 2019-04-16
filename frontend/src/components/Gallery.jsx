import React from "react";
import Band from "./Band";
import axios from "axios";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bands: [{
        id:'',
        title:'',
        saffiche : true
      }]
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3000/bands").then(res => {
      //console.log(res.data);
      this.setState({
        bands: res.data
      });

      /*
      this.setState({
        bands: ["Raphael", "Leonardo", "Michelangelo", "Donatello"]
      });
      */
    });
  }


deleteBand(id2){
  this.bands.filter(band => {
    return band.id === id2;
  })
}

  render() {
    return (
      <React.Fragment>
        {this.state.bands.map((band, i) => {
          return <Band key={i} bandData={band} deleteFunction={this.deleteBand} />;
        })}
      </React.Fragment>
    );
  }
}

export default Gallery;
