import React from "react";

import { AuthConsumer } from "../authContext";

const Login = () => (
  <AuthConsumer>
    {({ initiateLogin }) => <button onClick={initiateLogin}>Login</button>}
  </AuthConsumer>
);

export default Login;
