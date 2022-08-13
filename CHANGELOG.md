## [1.0.0-dev.8](https://github.com/flex-development/dist-tag-action/compare/1.0.0-dev.7...1.0.0-dev.8) (2022-08-13)


### :robot: Continuous Integration

* **workflows:** `label-syncer` -> `labels` ([888c1fc](https://github.com/flex-development/dist-tag-action/commit/888c1fc472984072b0178668b72a8e9a326a85df))
* **workflows:** add `workflow_dispatch` event to labels workflow ([bcf433a](https://github.com/flex-development/dist-tag-action/commit/bcf433ae4a29b609a152aa823f471c0314208b1d))
* **workflows:** fix labels workflow permissions ([397bb82](https://github.com/flex-development/dist-tag-action/commit/397bb82547888a79cdfa0f8f144e76a92c362962))
* **workflows:** handle `status:prereleased` label in release workflow ([ee539d5](https://github.com/flex-development/dist-tag-action/commit/ee539d53155fbcaadffd0f82afaed33d56c33aad))
* **workflows:** remove `inputs.version` from release workflow ([3192e79](https://github.com/flex-development/dist-tag-action/commit/3192e798c809d977c8c8e187ac0db1ae64e2d3cc))
* **workflows:** remove `release.jobs.metadata.steps.artifact` ([5187247](https://github.com/flex-development/dist-tag-action/commit/5187247f108a986ddf9a2aa860f7b9cf48e6a627))
* **workflows:** specify checkout ref in labels workflow ([e440d62](https://github.com/flex-development/dist-tag-action/commit/e440d62dfb6fba5d6fcab3aae582cc64825fd8e7))


### :pencil: Documentation

* add "publish github release" example ([8abd38d](https://github.com/flex-development/dist-tag-action/commit/8abd38d084b3e2b45b13bb55a17b98f662b435f2))
* **release:** fix workflow docs ([c53273d](https://github.com/flex-development/dist-tag-action/commit/c53273d54485a9ff797b1c859d27311ed37d1a3c))


### :house_with_garden: Housekeeping

* **github:** add `status:prereleased` label ([0a141d9](https://github.com/flex-development/dist-tag-action/commit/0a141d91449e4b2b9c7654697b733a6f7eccff24))

## [1.0.0-dev.7](https://github.com/flex-development/dist-tag-action/compare/1.0.0-dev.6...1.0.0-dev.7) (2022-08-13)


### :robot: Continuous Integration

* **workflows:** remove `setup-node` step from `release.jobs.publish` ([fdc6850](https://github.com/flex-development/dist-tag-action/commit/fdc6850264c7ca921227c16ab9c8356584916e84))
* **workflows:** remove `setup-node` step from ci workflow ([ae6c629](https://github.com/flex-development/dist-tag-action/commit/ae6c629f6fe8d4df565a66d67dbc313103640dc7))
* **workflows:** run ci workflow on subset of `push` events ([b48a8fc](https://github.com/flex-development/dist-tag-action/commit/b48a8fc1568118bc74308bedef8789a1371fea54))
* **workflows:** use `jq` in release workflow ([8c67efc](https://github.com/flex-development/dist-tag-action/commit/8c67efcb409daf25dc3220ad91b95519e5b4cbce))


### :pencil: Documentation

* add `action.yml` link to usage guide ([6dfdf2a](https://github.com/flex-development/dist-tag-action/commit/6dfdf2a6aa5e068f9a5abf8b2e536821001d5ccc))
* **workflows:** add `action-test` badge ([982920b](https://github.com/flex-development/dist-tag-action/commit/982920bcca04c3c69363219b8facb976ef3b910f))

## [1.0.0-dev.6](https://github.com/flex-development/dist-tag-action/compare/1.0.0-dev.5...1.0.0-dev.6) (2022-08-12)


### :robot: Continuous Integration

* **workflows:** revert back to releasing on pr merge ([afb0100](https://github.com/flex-development/dist-tag-action/commit/afb01004f87e670d7a957e73e6374e106b72f30f))

## [1.0.0-dev.5](https://github.com/flex-development/dist-tag-action/compare/1.0.0-dev.4...1.0.0-dev.5) (2022-08-12)


### :robot: Continuous Integration

* **workflows:** fix `'origin/main' is not a commit ...` ([78ad6b0](https://github.com/flex-development/dist-tag-action/commit/78ad6b0105e1fe3d1fe263ca4f62e9330bd0e818))
* **workflows:** publish releases from repo admin account ([4150a9f](https://github.com/flex-development/dist-tag-action/commit/4150a9fde92e55f4e1747b7e128c97685b72688f))
* **workflows:** use `merge_commit_sha` to create annotated tags ([de2b7dd](https://github.com/flex-development/dist-tag-action/commit/de2b7ddeb0d24e7dcfb5f14b777d8da92464abe2))

## [1.0.0-dev.4](https://github.com/flex-development/dist-tag-action/compare/1.0.0-dev.3...1.0.0-dev.4) (2022-08-12)


### :package: Build

* **deps-dev:** bump @vitest/ui from 0.21.0 to 0.21.1 ([#8](https://github.com/flex-development/dist-tag-action/issues/8)) ([1513467](https://github.com/flex-development/dist-tag-action/commit/151346778b92060a3fe7310194798aad36814a31))
* **deps-dev:** bump cspell from 6.6.0 to 6.6.1 ([#10](https://github.com/flex-development/dist-tag-action/issues/10)) ([738d7ff](https://github.com/flex-development/dist-tag-action/commit/738d7ffb15c0c1fbbec238df47d2342cfbebf1eb))
* **deps-dev:** bump unbuild from 0.7.6 to 0.8.7 ([#11](https://github.com/flex-development/dist-tag-action/issues/11)) ([ac9b811](https://github.com/flex-development/dist-tag-action/commit/ac9b81191d7d4968413e8c5e8a9f8415a6a59df3))
* **deps-dev:** bump vitest from 0.21.0 to 0.21.1 ([#9](https://github.com/flex-development/dist-tag-action/issues/9)) ([15ac101](https://github.com/flex-development/dist-tag-action/commit/15ac1019c9aac3cfdb9c00adfb66964dea55c637))


### :robot: Continuous Integration

* add gpr registry config for [@dependabot](https://github.com/dependabot) ([6fcb544](https://github.com/flex-development/dist-tag-action/commit/6fcb54414eaa515fe41ac2cf4f044dda3f4975ce))
* **deps:** bump actions/checkout from 3 to 3.0.2 ([a8f0fb1](https://github.com/flex-development/dist-tag-action/commit/a8f0fb1d7ceb030b6ecc7621363dace552fa553a))
* **deps:** bump actions/setup-node from 3 to 3.4.1 ([42b1697](https://github.com/flex-development/dist-tag-action/commit/42b1697d77ce525b96dc51a148f66a118db03b59))
* **workflows:** autofix lockfiles generated by [@dependabot](https://github.com/dependabot) ([49d4dfe](https://github.com/flex-development/dist-tag-action/commit/49d4dfe19d98baf379bd3627aaba4f2ca86924e6))
* **workflows:** cleanup workflow inputs ([42fc0f7](https://github.com/flex-development/dist-tag-action/commit/42fc0f7061c4abad24ff53bb5f40a900e4e10c3a))
* **workflows:** debug `approve-pr` ([383d3de](https://github.com/flex-development/dist-tag-action/commit/383d3ded8842356c9532989667be5de41ae1031d))
* **workflows:** fix `Cannot read properties of undefined (reading 'pr')` ([7db7459](https://github.com/flex-development/dist-tag-action/commit/7db7459cbd22971c8451650ff8d077a74cc73a4b))
* **workflows:** fix `delete-release-branch` step ([64423db](https://github.com/flex-development/dist-tag-action/commit/64423db266a99ff46e1c9ffa07a9713bdb2306aa))
* **workflows:** fix `dependabot-auto` ([3aac3b2](https://github.com/flex-development/dist-tag-action/commit/3aac3b2c689452016076c645dfc148bc979e8a53))
* **workflows:** fix `gh` commands context in `approve-pr` ([e7257e5](https://github.com/flex-development/dist-tag-action/commit/e7257e5fbace175fea53f42f1d57d845cf86c9b8))
* **workflows:** fix conditional in `approve-pr` ([67c3eb4](https://github.com/flex-development/dist-tag-action/commit/67c3eb437284809c92dd672330a17b17ac13bb2f))
* **workflows:** fix install commands ([43f0f77](https://github.com/flex-development/dist-tag-action/commit/43f0f77e6c21a6a4115ca7d96ed77fa6c293755f))
* **workflows:** fix linked issue querying ([816ccdc](https://github.com/flex-development/dist-tag-action/commit/816ccdc3eed90085689c861f2c5a2d8216c8d9f2))
* **workflows:** fix release commit request ([6fc02b1](https://github.com/flex-development/dist-tag-action/commit/6fc02b1da24c20286938a297223ef63a6dd2123f))
* **workflows:** only allow auto-merge for patch and minor updates by [@dependabot](https://github.com/dependabot) ([47a5f7a](https://github.com/flex-development/dist-tag-action/commit/47a5f7aea6152720c75e6054c067688b3fe288fb))
* **workflows:** opt for `secrets.GITHUB_TOKEN` ([75ac17d](https://github.com/flex-development/dist-tag-action/commit/75ac17dbd0a15b586aaf8af807d2198db6f93bd0))
* **workflows:** reduce `action-test` runs ([7f851ee](https://github.com/flex-development/dist-tag-action/commit/7f851ee740c81ec9c444a2933b7fc09f11bf1c90))
* **workflows:** reduce `label-syncer` runs ([9e36dc8](https://github.com/flex-development/dist-tag-action/commit/9e36dc8aef3f6d526dc6410adc05a48749d5d5cf))
* **workflows:** reduce number of ci workflow runs using `concurrency` ([ea0628d](https://github.com/flex-development/dist-tag-action/commit/ea0628d19b02e9607895de858aad9fdaf11dca76))
* **workflows:** reimplement [@dependabot](https://github.com/dependabot) auto approve and merge ([9dd3ae6](https://github.com/flex-development/dist-tag-action/commit/9dd3ae69d6381aac0801f4a7fa5743b4ed004422))
* **workflows:** reimplement pr auto approval ([4417d79](https://github.com/flex-development/dist-tag-action/commit/4417d794c5111144bfa13e007cdf38f077998be7))
* **workflows:** release on pr approval ([137b09e](https://github.com/flex-development/dist-tag-action/commit/137b09e1aa60a0982fdf820550b439b86e832019))
* **workflows:** remove `push` event trigger from ci workflow ([c566444](https://github.com/flex-development/dist-tag-action/commit/c5664449297851da5a7f3418ff0b3166c9cf3c6f))
* **workflows:** reorganize ci workflow ([de98bd4](https://github.com/flex-development/dist-tag-action/commit/de98bd42870d64c70c43255dc6501f8fa30741fd))
* **workflows:** reorganize workflows ([0dd5eec](https://github.com/flex-development/dist-tag-action/commit/0dd5eec14c2dd6984e5fec4c9d92f1da4cacf700))
* **workflows:** update workflow permissions ([050234d](https://github.com/flex-development/dist-tag-action/commit/050234db8f0800819c4f4fe73abd7f6cf0191d90))
* **workflows:** use `github.event.number` to get pr number ([ba18553](https://github.com/flex-development/dist-tag-action/commit/ba185530b3ce2a60839cb2174c4f3093ba153dc3))
* **workflows:** use job id as name ([af953fe](https://github.com/flex-development/dist-tag-action/commit/af953fe1a96815d571b017472f1f4a013b6f2cfe))


### :house_with_garden: Housekeeping

* turn off prettier eslint rule for yaml files ([dbf6872](https://github.com/flex-development/dist-tag-action/commit/dbf6872a32bdab5476fbd7693824e8fbbacd9251))
* update sample gitconfig ([efd6c31](https://github.com/flex-development/dist-tag-action/commit/efd6c31e6510b63231de0ccb25b5f24ba7d777ba))
* **github:** add commit scope `deps` ([17673a7](https://github.com/flex-development/dist-tag-action/commit/17673a7a7292887b9429d2579f02f413aa55d090))
* **yarn:** cleanup yarn environment ([35440c8](https://github.com/flex-development/dist-tag-action/commit/35440c85908430edd86bd2a92b6695d62930a445))
* **yarn:** fix lockfile ruined by [@dependabot](https://github.com/dependabot) ([a957e27](https://github.com/flex-development/dist-tag-action/commit/a957e27c80199a9fe0a8f89c0433e3ad29fd2444))
* **yarn:** remove `npm publish` settings from yarn config ([dedaddd](https://github.com/flex-development/dist-tag-action/commit/dedaddd3e028c90f00554bc94f3319b8b27e09a7))

## [1.0.0-dev.3](https://github.com/flex-development/dist-tag-action/compare/1.0.0-dev.2...1.0.0-dev.3) (2022-08-09)


### :robot: Continuous Integration

* **workflows:** `label-merged-issues` ([13fafa5](https://github.com/flex-development/dist-tag-action/commit/13fafa51a11a6e0625e220468f497540ba2148bc))
* **workflows:** `query-linked-issues` ([c1aca4d](https://github.com/flex-development/dist-tag-action/commit/c1aca4dcb96ad367a8f0bd571f69b7e0814509c7))
* **workflows:** fix linked issue querying ([150ba42](https://github.com/flex-development/dist-tag-action/commit/150ba421d5819b9caf2b571b287f417f5324f4bf))
* **workflows:** improve release workflow ([369a419](https://github.com/flex-development/dist-tag-action/commit/369a419a8b9810e0385ec43ec60e92730d13fa1e))
* **workflows:** reduce number of `ci` runs ([c07fb9c](https://github.com/flex-development/dist-tag-action/commit/c07fb9c026dd54658c386ce6a4d9b0e5fff9996d))


### :house_with_garden: Housekeeping

* set eslint environment to `es2022` ([15ac920](https://github.com/flex-development/dist-tag-action/commit/15ac9200680963b41561b1eabac4c7835e3cb244))
* standardize `https://docs.github.com` urls ([3e72e39](https://github.com/flex-development/dist-tag-action/commit/3e72e390f0df786a2e55e37d5fb0fbfb5f9dd53e))
* **pkg:** add keywords `npm-dist-tag` and `npm-publish` ([1b04765](https://github.com/flex-development/dist-tag-action/commit/1b04765840b29bdd8faf780540a59b5c1b78c693))
* **workflows:** improve reference links ([4d31166](https://github.com/flex-development/dist-tag-action/commit/4d31166cd4e2b68651cbf9d839e124ce78a541e6))

## [1.0.0-dev.2](https://github.com/flex-development/dist-tag-action/compare/1.0.0-dev.1...1.0.0-dev.2) (2022-08-09)


### :robot: Continuous Integration

* **workflows:** clarify branch used during gh release publish job ([369722d](https://github.com/flex-development/dist-tag-action/commit/369722df25738f1e94a63837c99cefaac2fc49ba))
* **workflows:** fix `Did you forget to run actions/checkout before running your local action?` ([20dc9aa](https://github.com/flex-development/dist-tag-action/commit/20dc9aa28cae53c0d7088ae02fd0cd809784b2d6))

## 1.0.0-dev.1 (2022-08-09)


### :package: Build

* **deps-dev:** bump @actions/core from 1.9.0 to 1.9.1 ([c7f1dff](https://github.com/flex-development/dist-tag-action/commit/c7f1dffd9d8eb057e033370bd21669ac84c9201f))
* **deps-dev:** bump @faker-js/faker from 7.3.0 to 7.4.0 ([00a180e](https://github.com/flex-development/dist-tag-action/commit/00a180e6b37aa362ad8aac92df9d6364ba8f6eae))
* **deps-dev:** bump @types/chai from 4.3.1 to 4.3.3 ([3ac99c1](https://github.com/flex-development/dist-tag-action/commit/3ac99c18ba4b8784423bfafd18881b8cc8e706da))
* **deps-dev:** bump @typescript-eslint/eslint-parser from 5.32.0 to 5.33.0 ([6deeed2](https://github.com/flex-development/dist-tag-action/commit/6deeed26480cbc5a86c09599f56a1376c2cdc8cc))
* **deps-dev:** bump @typescript-eslint/eslint-plugin from 5.32.0 to 5.33.0 ([581ae56](https://github.com/flex-development/dist-tag-action/commit/581ae561d4dd665a6f2fb4d69dda213edd205f3d))
* **deps-dev:** bump cspell from 6.5.0 to 6.6.0 ([44d5ce0](https://github.com/flex-development/dist-tag-action/commit/44d5ce0bb7dd975101204fc3d11b854c92a295c4))
* **deps-dev:** bump eslint-plugin-jsdoc from 39.3.4 to 39.3.6 ([73f60ec](https://github.com/flex-development/dist-tag-action/commit/73f60ecf2bf56408b9e72347d2dba31fbb98f683))


### :robot: Continuous Integration

* **workflows:** fix install command for [@dependabot](https://github.com/dependabot) ([40be0cb](https://github.com/flex-development/dist-tag-action/commit/40be0cbc079d8eb88e8f0269e3b887f113a89118))
* **workflows:** fix typo in `setup-node` step name ([2cc875a](https://github.com/flex-development/dist-tag-action/commit/2cc875abf899b00dc6cb623130e1bdf5c9168872))


### :pencil: Documentation

* built with ([38d61b3](https://github.com/flex-development/dist-tag-action/commit/38d61b38ab99b92ba7e27402e90549578efcb2f2))
* fix typo ([f5cbd90](https://github.com/flex-development/dist-tag-action/commit/f5cbd90dbc431762c1a67decc04a794f6c4b647e))
* **action:** inputs and outputs ([fd774f0](https://github.com/flex-development/dist-tag-action/commit/fd774f03ab38d03725505cb90fee4e169511d285))
* **action:** usage ([cd19a97](https://github.com/flex-development/dist-tag-action/commit/cd19a97eb664efa57e4a375ef26ca5f335fa5f4e))


### :sparkles: Features

* **action:** `run` ([06215a3](https://github.com/flex-development/dist-tag-action/commit/06215a304f3856113a5c99a150807e3acf847c55))


### :house_with_garden: Housekeeping

* first commit ([9b4a5e0](https://github.com/flex-development/dist-tag-action/commit/9b4a5e08ad5ab2e00e6015b4bd879591c1296ba3))
* remove `CHANGELOG` and `LICENSE` from eslint ignore ([e507849](https://github.com/flex-development/dist-tag-action/commit/e5078491fe91a537ae74f9bad9757da63ed4051e))
* rename project ([42b2332](https://github.com/flex-development/dist-tag-action/commit/42b23320db0104041d48ce3ec1c4b4118e528ae6))
* **action:** rebuild during pre-commit workflow ([0c636a9](https://github.com/flex-development/dist-tag-action/commit/0c636a986fbdde9d917c11e9f1c5e777803dfc95))
* **release:** improve release workflow ([1fb1f91](https://github.com/flex-development/dist-tag-action/commit/1fb1f91dad86eda8748fada0b71c1f3a3f8b7409))
* **workflows:** sort reference links ([e820dce](https://github.com/flex-development/dist-tag-action/commit/e820dcedb43ca60ca881b2734bfe7a3c097313a5))


### :white_check_mark: Testing

* **action:** test action in workflow context ([5dedbdc](https://github.com/flex-development/dist-tag-action/commit/5dedbdc7e702d55ac272aaac106372b7bcfa1601))

