const path = require('path')

module.exports = [
  {
    entry: [
      path.join(__dirname, 'index.js'),
      path.join(__dirname, 'styles/index.scss')
    ],
    output: {
      path: path.join(__dirname, '../server/public'),
      filename: 'bundle.js'
    },
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(sa|sc|c)ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devtool: 'source-map'
  },
  {
    mode: 'production',
    client: 'postgresql',
    module: {
      connection: {
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false }
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    }
  }
]
