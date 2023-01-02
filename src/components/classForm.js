import React from "react";

class Form extends React.Component {
  componentDidMount() {
    this.refInput.focus();
  }
  render() {
    return (
      <div>
        <input
          ref={(input) => {
            this.refInput = input;
          }}
          type="text"
          placeholder="Enter text"
        />
      </div>
    );
  }
}

export default Form;
