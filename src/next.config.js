const withTypescript = require('@zeit/next-typescript')
const {
  pipe,
  mergeDeepRight
} = require('ramda')
const { resolve } = require('path')

// TODO: move all these to a lib

const buildWebpackConfig = (previousNextConfig, webpackConfig, options) => {
  return typeof previousNextConfig.webpack === 'function'
    ? previousNextConfig.webpack(webpackConfig, options)
    : webpackConfig
}
const withElectron = previousNextConfig => ({
  ...previousNextConfig,
  webpack(previousWebpackConfig, options) {
    const webpackConfig = {
      ...previousWebpackConfig,
      target: 'electron-renderer'
    }
    return buildWebpackConfig(previousNextConfig, webpackConfig, options)
  }
})

const withCustomAliases = alias => previousNextConfig => ({
  ...previousNextConfig,
  webpack(previousWebpackConfig, options) {
    const webpackConfig = mergeDeepRight(previousWebpackConfig, {
      resolve: { alias }
    })
    return buildWebpackConfig(previousNextConfig, webpackConfig, options)
  }
})

const configuration = (phase, { defaultConfig: defaultNextConfig }) => {
  return pipe(
    withElectron,
    withTypescript,
    withCustomAliases({
      '~': resolve('src'),
      '@types': resolve('types')
    }),
  )(defaultNextConfig)
}

module.exports = configuration
