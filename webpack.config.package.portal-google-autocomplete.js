const path = require('path')
// const webpack = require('webpack')

module.exports = {
  entry: './src/portal-google-autocomplete.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'portal-google-autocomplete.js',
    library: {
      name: 'PortalGoogleAutocomplete',
      type: 'umd'
    }
  }
  // module: {
  //   rules: [
  //     {
  //       test: /\.(png|jpe?g|gif)$/i,
  //       use: [
  //         {
  //           loader: 'file-loader',
  //         },
  //       ],
  //     },
  //   ],
  // }
}
