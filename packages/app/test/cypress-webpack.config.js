const { join } = require('path');

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: ['src', 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'ts-loader',

            options: {
              transpileOnly: true,
              configFile: join(__dirname, 'tsconfig.json'),
            },
          },
        ],
      },
    ],
  },
};
