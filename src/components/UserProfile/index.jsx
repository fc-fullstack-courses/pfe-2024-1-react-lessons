import React, { Component } from 'react';

class UserProfile extends Component {
  state = {
    user: {
      id: 0,
      firstName: 'User',
      lastName: 'Userenko',
      isMale: true,
      email: 'testuser@gmail.com',
      age: 12,
    },
  }

  render() {
    const { user } = this.state;

    return (
      <article>
        <h1>{user.firstName} {user.lastName}</h1>
        <p>Стать: {user.isMale ? 'чоловіча' : 'жіноча'}</p>
        <p>Вік: {user.age}</p>
        <p>Електронна пошта: {user.email}</p>
      </article>
    );
  }
}

export default UserProfile;
