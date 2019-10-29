import React from "react";
import Inventory from "./Inventory";
import Dog from "./Dog";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: 0
    };
  }

  incrementClick = () => {
    this.setState({ click: this.state.click + 1 });
  };

  render() {
    return (
      <div className="game">
        <Dog chaussette={this.incrementClick} />
        <Inventory carotttte={this.state.click} />
      </div>
    );
  }
}

export default Game;
