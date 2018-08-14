const { map } = require('ramda')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

// const appConstants = require('./src/constants/app')
const colorConstants = require('./src/constants/color')
const logoConstant = require('./src/constants/logo')
const slsConstants = require('./slsOutput.json')

// const env = slsConstants.env || 'dev'
const env = 'development'
const isProd = env === 'production'
const envVars = Object.assign(
	{ __sha__: process.env.CIRCLE_SHA1 || 'dev' },
	colorConstants,
	logoConstant,
	// appConstants,
	slsConstants,
)

module.exports = {
	mode: env,
	devtool: isProd ? false : 'source-map',
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
						plugins: ['package-name-import'],
					},
				}
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
			map(JSON.stringify, envVars)
		)
	],
}
