import React from "react";

class Inventory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>{`You have ${this.props.carotttte} click !`}</p>
      </div>
    );
  }
}

export default Inventory;
