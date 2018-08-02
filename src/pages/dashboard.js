import React from 'react';
import { Redirect } from "react-router-dom";

import { AuthConsumer } from '../authContext';
import Can from '../components/Can';
import Logout from '../components/Logout';
import Profile from '../components/Profile';
import PostsList from '../components/PostsList';

const DashboardPage = props => (
  <AuthConsumer>
    {({ user }) => (
      <Can
        role={user.role}
        perform='dashboard-page:visit'
        yes={() => (
          <div>
            Dashboard
            <Logout />
            <Profile />
            <PostsList />
          </div>
        )}
        no={() => (
          <Redirect to="/" />
        )}
      />
    )}
  </AuthConsumer>
)

export default DashboardPage;
