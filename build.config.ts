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
  entries: [{ bundle: true, createRequire: true, source: 'src/main.ts' }],
  esbuild: {
    minify: true,
    platform: 'node',
    target: [tsconfig.compilerOptions.target, 'node16'],
    treeShaking: true,
    tsconfig: 'tsconfig.build.json'
  }
})

export default config
