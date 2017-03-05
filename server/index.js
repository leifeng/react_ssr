
import webpack from 'webpack';
import webpackConfig from '../webpack.config';
import middleware from 'koa-webpack';

import path from 'path'
import koa from 'koa'
import routes from './routes'

const compiler = webpack(webpackConfig);

const app = new koa();
app.use(middleware({
  compiler: compiler
}))
app.use(require('koa-static')(
  path.join(__dirname, '../static')
))
app.use(routes)



app.listen(3000);
console.log('running')