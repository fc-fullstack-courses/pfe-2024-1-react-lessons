import React from 'react';

class Clock extends React.Component {
  state = { currentTime: new Date() };

  render() {
    const { currentTime } = this.state;

    return <div>
      <h2>Годинник</h2>
      <p>Поточний час: {currentTime.toLocaleTimeString('it-IT')}</p>
    </div>;
  }
}

export default Clock;
