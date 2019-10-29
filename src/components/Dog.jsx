import React from "react";

class Dog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src="dog.webp" alt="dog" onClick={this.props.chaussette} />
      </div>
    );
  }
}

export default Dog;
