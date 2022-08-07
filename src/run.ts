/**
 * @file Run
 * @module dtag-action/run
 */

import { getInput, setFailed, setOutput } from '@actions/core'
import dtag from '@flex-development/dtag'

/**
 * Searches [`inputs.target`][1] for a [distribution (dist) tag][2].
 *
 * The extracted tag will be accessible via action output field `tag`.
 *
 * Action output field `flag` will also be available and exposes the extracted
 * tag in [npm flag format `(--tag  <tag>)`][3].
 *
 * If a tag isn't found, all outputs will be set to empty strings.
 *
 * [1]: https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#inputs
 * [2]: https://docs.npmjs.com/cli/v8/commands/npm-dist-tag
 * [3]: https://docs.npmjs.com/cli/v8/commands/npm-publish#tag
 *
 * @return {void} Nothing when complete
 */
function run(): void {
  try {
    /**
     * lookup target separator.
     *
     * @const {string | undefined} delimiter
     */
    const delimiter: string | undefined = getInput('delimiter') || undefined

    /**
     * lookup target.
     *
     * @const {string} target
     */
    const target: string = getInput('target')

    /**
     * dist tag extracted from {@link target}.
     *
     * @const {string} tag
     */
    const tag: string = dtag({ delimiter, target })

    setOutput('flag', tag ? ['--tag', tag].join(' ').trim() : tag)
    setOutput('tag', tag)
  } catch (e: unknown) {
    setFailed(e as Error)
  }
}

export default run
