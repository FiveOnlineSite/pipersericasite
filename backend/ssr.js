// backend/ssr.js
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "../frontend/src/App";

export function renderReactApp(url) {
  const context = {};

  const jsx = (
    <StaticRouter location={url} context={context}>
      <App />
    </StaticRouter>
  );

  const html = ReactDOMServer.renderToString(jsx);

  return html;
}
