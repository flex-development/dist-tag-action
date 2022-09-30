/**
 * @file Build Config
 * @module config/build
 * @see https://github.com/flex-development/mkbuild
 */

import { defineBuildConfig, type Config } from '@flex-development/mkbuild'
import tsconfig from './tsconfig.build.json' assert { type: 'json' }

/**
 * Build configuration options.
 *
 * @const {Config} config
 */
const config: Config = defineBuildConfig({
  bundle: true,
  minify: true,
  platform: 'node',
  source: 'src/main.ts',
  target: [tsconfig.compilerOptions.target, 'node16'],
  treeShaking: true,
  tsconfig: 'tsconfig.build.json'
})

export default config
