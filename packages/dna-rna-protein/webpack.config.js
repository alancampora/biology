const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		main: './src/index.jsx',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
            presets: ['@babel/react'],
					},
				},
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: 'src/index.html',
			filename: 'src/index.html',
		}),
	],
};
