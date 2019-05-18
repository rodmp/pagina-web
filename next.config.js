const { withPlugins } = require('next-compose-plugins')
const withTypescript = require('@zeit/next-typescript')
const { mergeDeepRight } = require('ramda')
const { resolve } = require('path')

const {
  PHASE_PRODUCTION_BUILD,
  // PHASE_PRODUCTION_SERVER,
  // PHASE_DEVELOPMENT_SERVER,
  // PHASE_EXPORT,
} = require('next/constants')

const nextConfig = {
  [PHASE_PRODUCTION_BUILD]: { target: 'serverless' }
}

const buildWebpackConfig = (previousNextConfig, webpackConfig, options) => {
  return typeof previousNextConfig.webpack === 'function'
    ? previousNextConfig.webpack(webpackConfig, options)
    : webpackConfig
}

const withElectron = previousNextConfig => ({
  ...previousNextConfig,
  webpack(previousWebpackConfig, options) {
    const webpackConfig = { ...previousWebpackConfig, target: 'electron-renderer' }
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

module.exports = withPlugins([
  withElectron,
  withTypescript,
  withCustomAliases({
    '~': resolve('src'),
    '@types': resolve('types'),
    '@assets': resolve('assets')
  })
], nextConfig)
