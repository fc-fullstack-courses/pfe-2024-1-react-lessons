import React from 'react';
import DataLoader from './components/DataLoader';
import * as API from './api';
import ComponentA from './components/drillingComponents/A';

class App extends React.Component {
  state = {
    user: {
      id: 0,
      firstName: 'Petro',
      lastName: 'Userenko',
      isMale: true,
      email: 'testuser@gmail.com',
      age: 12,
    },
  };

  handleLogout = () => {
    this.setState({
      user: null,
    });
  };

  handleLogin = () => {
    this.setState({
      user: {
        id: 0,
        firstName: 'User',
        lastName: 'Userenko',
        isMale: true,
        email: 'testuser@gmail.com',
        age: 12,
      },
    });
  };

  render() {
    const { user } = this.state;

    const renderMessages = (state, load) => {
      console.log(state);

      const { data: messages, isLoading, error } = state;

      return (
        <div>
          <button onClick={() => load()}>Load again</button>
          {isLoading && <div>LOADING ...</div>}
          {error && <div>ERROR: {error.message}</div>}
          {messages &&
            messages.map((message) => (
              <article key={message.id}>
                <h2>{message.title}</h2>
                <h3>By {message.author}</h3>
                <p>{message.text}</p>
              </article>
            ))}
        </div>
      );
    };

    return (
      <>
        <ComponentA />
        <DataLoader loadData={API.getMessages} children={renderMessages} />
        <DataLoader loadData={API.getMessages}>{renderMessages}</DataLoader>
        <DataLoader
          loadData={API.getVideos}
          children={(state) => <div>{JSON.stringify(state)}</div>}
        />
        <DataLoader loadData={API.getVideos}>
          {(state) => <div>{JSON.stringify(state)}</div>}
        </DataLoader>
      </>
    );
  }
}

export default App;
