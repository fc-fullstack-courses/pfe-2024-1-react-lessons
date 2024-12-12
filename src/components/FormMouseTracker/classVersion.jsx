import { Component } from 'react';

class FormMouseTracker extends Component {
  state = {
    inputText: '',
    mouseCoordinates: {
      x: 0,
      y: 0,
    },
  };

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      inputText: value,
    });
  };

  handleChangeCoords = ({ clientX, clientY }) => {
    this.setState({
      mouseCoordinates: {
        x: clientX,
        y: clientY,
      },
    });
  };

  render() {
    const {
      inputText,
      mouseCoordinates: { x, y },
    } = this.state;

    return (
      <div
        style={{
          minHeight: '500px',
          maxWidth: '500px',
          border: '1px solid black',
        }}
        onMouseMove={this.handleChangeCoords}
      >
        <p>Input value is: {inputText}</p>
        <p>X coord value is: {x}</p>
        <p>Y coord is: {y}</p>
        <input
          type='text'
          value={inputText}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default FormMouseTracker;
