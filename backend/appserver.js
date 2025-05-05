import React from "react";
import { StaticRouter } from "react-router-dom"; // ⚡ IMPORTANT: 'server' import, not 'react-router-dom'
import App from "../frontend/src/App"; // adjust path if needed

const AppServer = ({ location, context }) => (
  <StaticRouter location={location} context={context}>
    <App />
  </StaticRouter>
);

export default AppServer;
