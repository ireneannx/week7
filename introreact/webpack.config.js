const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
// entry
//output
//loaders
//mode
//plugins
module.exports = {
   entry: './app/index.js',
   output: {
       path: path.resolve(__dirname, 'dist'), //make a file called dist in directory which has bundle.js 
       filename: 'bundle.js'
     },
     module:{
       rules: [
           //babel - babel loader
           {test : /\.(js)$/, use : 'babel-loader'},
           //styles - css loader
           {test : /\.(css)$/, use : ['style-loader','css-loader']} //every file that ends with css should use style loader which interprets input statements because we wont be explicitly writing script tags. css loader loads the css into the app 
       ]
   },
   mode: "development", //or production. in production it will be compressed
   plugins: [
       new HtmlWebpackPlugin({template: 'app/index.html'})
     ]
 };