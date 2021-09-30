const path = require('path')

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
}
