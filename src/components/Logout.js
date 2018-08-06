import React from 'react';

import {AuthConsumer} from '../authContext';

const Logout = () => (
  <AuthConsumer>
    {({logout}) => (
      <button onClick={logout}>Logout</button>
    )}
  </AuthConsumer>
);

export default Logout;
