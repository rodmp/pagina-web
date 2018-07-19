const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const env = process.env.ENVIRONMENT || 'development'
const isProd = env === 'production'

module.exports = {
	mode: env,
	entry: path.resolve(__dirname, 'src/client-web/app.js'),
	output: {
		path: path.resolve(__dirname, 'dist/build-web-client'),
		filename: 'bundle.js',
	},
	devServer: {
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'stage-0', 'react'],
        				// plugins: ['package-name-import']
						// presets: [
						// 	['env', { loose: true, modules: false }],
						// 	'stage-0',
						// 	'react',
						// ],
						plugins: ['package-name-import'],
					},
				}
				// loader: 'babel-loader',
				// query: {
				// 	presets: [
				// 		['env', { loose: true, modules: false }],
				// 		'stage-0',
				// 		'react',
				// 	],
				// 	plugins: ['package-name-import'],
				// },
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|css)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/client-web/app.html'),
			hash: isProd,
			// inject: 'body',
			// minify: {
			// 	collapseWhitespace: true,
			// 	removeRedundantAttributes: true,
			// 	useShortDoctype: true,
			// },
		})
	],
}
