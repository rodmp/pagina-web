import path from 'path'
import ZipPlugin from 'zip-webpack-plugin'
import nodeExternals from 'webpack-node-externals'

// const env = slsConstants.env || 'dev'
const env = 'development'
const isProd = env === 'production'

module.exports = {
	mode: env,
	devtool: isProd ? false : 'source-map',
	target: 'node',
	output: {
		libraryTarget: 'commonjs2',
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
	plugins: [
		new ZipPlugin({
			// pathPrefix: 'test',
		}),
	],
}
