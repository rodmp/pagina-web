const { map } = require('ramda')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const CircularDependencyPlugin = require('circular-dependency-plugin')

// const appConstants = require('./src/constants/app')
const colorConstants = require('./src/constants/color')
const logoConstant = require('./src/constants/logo')

// const env = slsConstants.env || 'dev'
const env = 'development'
const isProd = env === 'production'
const envVars = Object.assign(
	{ __sha__: process.env.CIRCLE_SHA1 || 'dev' },
	colorConstants,
	logoConstant,
	// appConstants,
)

module.exports = {
	mode: env,
	devtool: isProd ? false : 'source-map',
	entry: [
		'babel-polyfill',
		path.resolve(__dirname, 'src/client-web/app.js'),
	],
	output: {
		path: path.resolve(__dirname, 'dist/build-web-client'),
		filename: 'bundle.js',
		publicPath: '/',
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
						plugins: ['package-name-import'],
					},
				},
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
		new HtmlWebpackPlugin(Object.assign({
			template: path.resolve(__dirname, 'src/client-web/app.html'),
			hash: isProd,
			// inject: 'body',
			// minify: {
			// 	collapseWhitespace: true,
			// 	removeRedundantAttributes: true,
			// 	useShortDoctype: true,
			// },
		}, envVars)),
		new webpack.DefinePlugin(
			map(JSON.stringify, envVars),
		),
		// new CircularDependencyPlugin({
		// 	// exclude detection of files based on a RegExp
		// 	exclude: /node_modules/,
		// 	// add errors to webpack instead of warnings
		// 	failOnError: true,
		// 	// set the current working directory for displaying module paths
		// 	cwd: process.cwd(),
		// }),
	],
}
