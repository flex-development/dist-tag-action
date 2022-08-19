# dist-tag-action

[![action-test](https://github.com/flex-development/dist-tag-action/actions/workflows/action-test.yml/badge.svg)](https://github.com/flex-development/dist-tag-action/actions/workflows/action-test.yml)
[![conventional commits](https://img.shields.io/badge/conventional%20commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![license](https://img.shields.io/github/license/flex-development/dist-tag-action.svg)](LICENSE.md)
[![typescript](https://badgen.net/badge/-/typescript?color=2a72bc&icon=typescript&label)](https://typescriptlang.org)

> **[Distribution tag][3] lookup utility for GitHub Actions.**

## Usage

See [`action.yml`](action.yml)

```yaml
name: dist-tag
on:
  workflow_dispatch:
    inputs:
      delimiter:
        description: lookup target separator
        required: true
      target:
        description: lookup target
        required: true
jobs:
  dist-tag:
    runs-on: ubuntu-latest
    steps:
      - id: dist-tag
        name: Get dist tag
        uses: flex-development/dist-tag-action@<VERSION>
        with:
          delimiter: ${{ github.event.inputs.delimiter }}
          target: ${{ github.event.inputs.target }}
      - id: print-raw
        name: Print raw dist tag
        run: echo ${{ steps.dist-tag.outputs.tag }}
      - id: print-flag
        name: Print dist tag as npm flag (--tag <tag>)
        run: echo ${{ steps.dist-tag.outputs.flag }}
      - id: print-prerelease-state
        name: Print prerelease state
        run: echo ${{ steps.dist-tag.outputs.prerelease }}
```

## Inputs and Outputs

```yaml
inputs:
  delimiter:
    description: lookup target separator
    required: false
  target:
    description: lookup target
    required: false
outputs:
  flag:
    description: |
      dist tag in cli flag format (--tag <tag>) or empty string
      see: https://docs.npmjs.com/cli/v8/commands/npm-publish#tag
  prerelease:
    description: boolean indicating prerelease state. determined by dist tag length
  tag:
    description: dist tag or empty string
```

## Examples

### Publish GitHub Release

See [`.github/workflows/release.yml`](.github/workflows/release.yml) for a
breadth worthy alternative.

```yaml
# Release
#
# Publish a GitHub release when a `release/*` branch is merged into `main`.
#
# References:
#
# - https://cli.github.com/manual/gh_release_create
# - https://docs.github.com/actions/using-workflows/events-that-trigger-workflows#pull_request
# - https://docs.github.com/actions/using-workflows/using-github-cli-in-workflows
# - https://github.com/actions/checkout

---
name: release
on:
  pull_request:
    branches:
      - main
    types:
      - closed
permissions:
  packages: read
env:
  GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
jobs:
  metadata:
    if: (startsWith(github.head_ref, 'release/') && github.event.pull_request.merged)
    runs-on: ubuntu-latest
    outputs:
      prerelease: ${{ steps.dist-tag.outputs.prerelease }}
      tag: ${{ steps.tag.outputs.result }}
      version: ${{ steps.version.outputs.result }}
    steps:
      - id: checkout
        name: Checkout ${{ github.head_ref }}
        uses: actions/checkout@v3.0.2
        with:
          ref: ${{ github.head_ref }}
      - id: version
        name: Get version
        run: echo "::set-output name=result::$(jq .version package.json -r)"
      - id: tag
        name: Get release tag
        run: echo "::set-output name=result::${{ steps.version.outputs.result }}"
      - id: dist-tag
        name: Get dist tag
        uses: flex-development/dist-tag-action@<VERSION>
        with:
          target: ${{ steps.version.outputs.result }}
  publish:
    needs: metadata
    runs-on: ubuntu-latest
    env:
      NOTES_FILE: ./RELEASE_NOTES.md
    steps:
      - id: checkout
        name: Checkout ${{ github.head_ref }}
        uses: actions/checkout@v3.0.2
        with:
          fetch-depth: 0
          ref: ${{ github.head_ref }}
      - id: yarn
        name: Install dependencies
        run: yarn
        env:
          HUSKY: 0
          NODE_AUTH_TOKEN: ${{ env.GITHUB_TOKEN }}
      - id: pack
        name: Pack project
        run: yarn pack -o %s-%v.tgz
        env:
          NODE_ENV: production
      - id: release-notes
        name: Generate release notes
        run: yarn conventional-changelog -o $NOTES_FILE
      - id: publish
        name: Publish release
        run: gh release create $TAG *.tgz -t=$TAG -F=$NOTES_FILE -p=$PRERELEASE
        env:
          GITHUB_TOKEN: ${{ secrets.PAT_REPO_ADMIN }}
          PRERELEASE: ${{ needs.metadata.outputs.prerelease }}
          TAG: ${{ needs.metadata.outputs.tag }}
```

## Built With

- [`@actions/core`][1]
- [`@flex-development/dist-tag`][2]

[1]: https://github.com/actions/toolkit/tree/main/packages/core
[2]: https://github.com/flex-development/dist-tag
[3]: https://docs.npmjs.com/cli/v8/commands/npm-dist-tag
