import { Component } from 'react';

/*

  1. компонент має завантажити будь-які дані, які його попросять
  2. він має їх зберігти у свому стані
  3. при цьому він сам по собі не знає як правильно відмалювати ці дані
  4. компонент має якимось чином надати доступ до своєго стана назовні щоб звідти 
    на основі даних можна було зробити рендер

*/

class DataLoader extends Component {
  state = {
    data: null,
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.load();
  }

  load = () => {
    // loadData - функція, яка повртає проміс с данимм
    const { loadData } = this.props;

    this.setState({
      isLoading: true,
    });

    loadData()
      .then((data) => {
        this.setState({ data });
      })
      .catch((error) => {
        this.setState({ error });
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  };

  render() {
    // render - функція, яка містить jsx який треба відмалювати
    // const jsxLayout = this.props.render(this.state, this.load);

    const jsxLayout = this.props.children(this.state, this.load);

    return jsxLayout;
  }
}

export default DataLoader;
