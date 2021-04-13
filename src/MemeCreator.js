import React, { Component } from "react";
import image from "./simply.jpg";

class MemeCreator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "One should simply",
      bottomText: "try this meme generator..."
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <div className="meme-input">
          <input
            type="text"
            name="topText"
            placeholder="enter top text"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="enter bottom text"
            onChange={this.handleChange}
          />
        </div>
        <div className="meme-creator">
          <img src={image} />
          <h1 className="topText">{this.state.topText}</h1>
          <h1 className="bottomText">{this.state.bottomText}</h1>
          <h1 />
        </div>
      </div>
    );
  }
}

export default MemeCreator;
