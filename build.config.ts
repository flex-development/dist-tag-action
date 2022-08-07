/**
 * @file Unbuild Config
 * @module config/unbuild
 * @see https://github.com/unjs/unbuild#configuration
 */

import { defineBuildConfig, type BuildConfig } from 'unbuild'
import pkg from './package.json'

/**
 * Build options.
 *
 * @const {BuildConfig} config
 */
const config: BuildConfig = defineBuildConfig({
  devDependencies: Object.keys(pkg.devDependencies),
  entries: ['src/main'],
  rollup: {
    esbuild: { logLevel: 'info', minify: true, target: 'esnext' },
    inlineDependencies: true,
    json: { compact: true },
    resolve: {}
  }
})

export default config
