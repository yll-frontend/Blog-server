const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const webpackConfig = {
  target: 'node', // koa项目仅在node环境下运行，因此设置称'node'
  entry: {
    // eslint-disable-next-line no-undef
    server: path.join(__dirname, '../src/app.js')
  },
  output: {
    filename: '[name].bundle.js',
    // eslint-disable-next-line no-undef
    path: path.join(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        use: {
          loader: 'babel-loader'
        },
        // eslint-disable-next-line no-undef
        include: path.join(__dirname, '../src')
      }
    ]
  },
  resolve: {
    // eslint-disable-next-line no-undef
    modules: [path.join(__dirname, '../src/app.js'), 'node_modules'],
    extensions: ['.js', '.json'],
    alias: {
      // eslint-disable-next-line no-undef
      '@': path.join(__dirname, '../src')
    }
  },
  externals: [nodeExternals()], // 排除对node_modules里的依赖进行打包
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      // 定义环境变量，区分开发和生产环境
      // 具体详情可查看DefinePlugin文档
      'process.env.NODE_ENV':
        // eslint-disable-next-line no-undef
        process.env.NODE_ENV === 'production'
          ? JSON.stringify('production')
          : JSON.stringify('development')
    })
  ],
  // node下这些选项可以使最初为Node.js环境编写的代码，在其他环境（如浏览器）中运行
  node: {
    console: true,
    global: true,
    process: true,
    Buffer: true,
    __filename: true,
    __dirname: true,
    setImmediate: true,
    path: true
  }
}

module.exports = webpackConfig
