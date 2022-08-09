# dist-tag-action

[![conventional commits](https://img.shields.io/badge/conventional%20commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![license](https://img.shields.io/github/license/flex-development/dist-tag-action.svg)](LICENSE.md)
[![typescript](https://badgen.net/badge/-/typescript?color=2a72bc&icon=typescript&label)](https://typescriptlang.org)

> [Distribution tag][3] lookup utility for GitHub Actions.

## Usage

**TODO**: Update documentation.

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
  tag:
    description: dist tag or empty string
```

## Examples

**TODO**: Update documentation.

## Built With

- [`@actions/core`][1]
- [`@flex-development/dist-tag`][2]

[1]: https://github.com/actions/toolkit/tree/main/packages/core
[2]: https://github.com/flex-development/dist-tag
[3]: https://docs.npmjs.com/cli/v8/commands/npm-dist-tag
