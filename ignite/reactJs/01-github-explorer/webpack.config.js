const path = require('path')

module.exports ={
	entry: path.resolve(__dirname, 'src', 'index.jsx'),

	output:{
		path: resolve(__dirname, 'dist'), 
		filename: 'bundle.js',
	},
resolve: {
	extensions: ['.js', '.jsx'],
}, 
module: {
	rules:[{
		test: /\.js$/,
		exclude: /node_modules/,
		use: 'babel-loader',
	}]
}

}