var webpack = require('webpack');

module.exports = {
	entry: './src/alert-confirm.js',
	output: {
		path: './build',
		filename: 'alert-confirm.min.js'
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			output: {
				comments: false
			}
		})
	]
};
