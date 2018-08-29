const path = require('path')
const slsw = require('serverless-webpack')
const nodeExternals = require('webpack-node-externals')

// const env = slsConstants.env || 'dev'
const env = 'development'
const isProd = env === 'production'

module.exports = {
	mode: env,
	devtool: isProd ? false : 'source-map',
	entry: slsw.lib.entries,
	target: 'node',
	output: {
		libraryTarget: 'commonjs2',
		path: path.join(__dirname, '.webpack'),
		filename: '[name].js',
		sourceMapFilename: '[file].map',
	},
	externals: [nodeExternals()],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'stage-0'],
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
}
