import React from 'react';

class Clock extends React.Component {
  state = { currentTime: new Date() };

  componentDidMount () {
    console.log('componentDidMount запускається 1 раз при першому рендері компонента');

    const intervalId = setInterval(() => {
      console.log('changed date');

      this.setState({
        currentTime: new Date()
      });

    }, 500);

    this.intervalId = intervalId;

    // this.setState({
    //   intervalId: intervalId
    // });
  }

  componentDidUpdate() {
    console.log('componentDidUpdate запускається при наступних рендерах компонента');

    // стан оновлюється не завжди НОРМАЛЬНО
    // if(Math.random() > 0.5) {
    //   this.setState({

    //   });
    // }

    // рекурсія оновлення станів ПОГАНО
    // this.setState({});

  }

  componentWillUnmount() {
    console.log('componentWillUnmount запускаєть перед розмонтуванням комопнента. Дає можливість підчиститидовготривалі побічні ефекти');

    if(this.intervalId) {
      clearInterval(this.intervalId);
    }

    // const { intervalId } = this.state;

    // if(intervalId) {
    //   clearInterval(intervalId);
    // }
  }

  render() {
    const { currentTime } = this.state;

    // НЕ МОЖНА виклакати setState напряму в методі render
    // this.setState({});

    // setInterval(() => {
    //   console.log('changed date');

    //   this.setState({
    //     currentTime: new Date()
    //   });

    // }, 500);

    return <div>
      <h2>Годинник</h2>
      <p>Поточний час: {currentTime.toLocaleTimeString('it-IT')}</p>
    </div>;
  }
}

export default Clock;
