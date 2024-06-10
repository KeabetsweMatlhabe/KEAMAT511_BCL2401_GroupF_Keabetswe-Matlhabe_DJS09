const path = require('path');

module.exports = {
  "output": {
    "filename": "[name].pack.js",
    path: path.resolve(__dirname, 'dist'),
  },
  "entry": {
    "index": "./index"
  },
  "resolve": {
    "extensions": [
      '.tsx', 
      ".ts",
      ".js",
      ".json"
    ]
  },
  "module": {
    "rules": [
      {
        "use": {
          "loader": "ts-loader"
        },
        "exclude": /node_modules/,
        "test": /\.ts$/
      }
    ]
  }
};