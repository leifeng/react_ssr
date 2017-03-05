import React from 'react';
import { match, RouterContext } from 'react-router';
import { renderToString } from 'react-dom/server';
import routes from '../../app/routes.js';

export default async (ctx, next) => {
    match({ routes, location: ctx.url }, (error, redirectLocation, renderProps) => {
        if (error) {
            ctx.status = 500;
            ctx.body = error.message
        } else if (redirectLocation) {
            ctx.status = 302;
            ctx.redirect(redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
            ctx.body = renderFullPage(renderToString(<RouterContext {...renderProps} />))
          
        } else {
            ctx.status = 404;
            ctx.body = 'Not found'
        }
    })
}

function renderFullPage(html) {
    console.log(html)
    return `
    <!doctype html>
    <html>
      <head>
        <title>koa+react 服务器渲染</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}