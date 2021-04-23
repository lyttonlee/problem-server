const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/app.ts',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '...']
  },
  externals: ['pg', 'sqlite3', 'tedious', 'pg-hstore'], // pa-hstore is only installed in dev, aviod build squelize error
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  }
}
