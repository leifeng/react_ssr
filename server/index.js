import React from 'react';
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from '../app/routes.js'

import webpack from 'webpack';
import webpackConfig from '../webpack.config';
import middleware from 'koa-webpack';

import path from 'path'
import koa from 'koa'
import Router from 'koa-router';

const compiler = webpack(webpackConfig);

const app = new koa();
app.use(middleware({
  compiler: compiler
}))
app.use(require('koa-static')(
  path.join(__dirname, '../static')
))


app.use(ctx => {
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
});

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


app.listen(3000);
console.log('running')