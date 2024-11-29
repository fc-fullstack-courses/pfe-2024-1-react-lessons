import React, { Component } from 'react';

class UsersLoader extends Component {
  state = {
    users: [],
    error: null,
    isLoading: false
  }

  render() {
    const { users, isLoading, error } = this.state;

    if(isLoading) {
      return <div>LOADING ...</div>
    }

    if(error) {
      return <div>ERROR: {error.message}</div>
    }
    
    const usersCards = users.map(user => {
      return <div key={user.id}>
        <pre>{JSON.stringify(user, null, 4)}</pre>
      </div>
    });

    return (
      <div>
        {usersCards}
      </div>
    );
  }
}

export default UsersLoader;
