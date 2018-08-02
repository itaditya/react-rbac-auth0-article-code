import React from 'react';

import { AuthConsumer } from '../authContext';

const Profile = () => (
  <AuthConsumer>
    {({ user }) => (
      <div>
        <h2>User Profile</h2>
        <ul>
          <li>Email: {user.email}</li>
          <li>Role: {user.role}</li>
        </ul>
      </div>
    )}
  </AuthConsumer>
)

export default Profile;
