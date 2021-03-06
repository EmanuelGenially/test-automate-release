# Test automate release

- Lint for commits
- Commit messages
- Install semanctic-release
- Circle CI for continuous integration
- And automatic release on push to master or by merging a pull request or merging from another branch
- Adding plugins

## Getting Started

Let me show you how to do it.

### Lint for commits

- [commitlint](https://github.com/marionebl/commitlint)

First, it is necessary [Husky](https://github.com/typicode/husky#readme)

```
npm install husky --save-dev
```

let´s go to install commitlint

```
npm install --save-dev @commitlint/{config-conventional,cli}
```

go to config commitlint

```
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```

and add in package.json

```javascript
// package.json
"husky": {
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
}
```

#### Test to commitlint

```javascript
git commit -m "foo: test failed" // fail
git commit -m "fix: test ok" // ok
```

### Commit message examples

> Read more: [Angular contribution guideline](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type)

**types**, (_name_)

- **build**(_dependencies_): Changes that affect the build system or external dependencies.
- **ci**(_CircleCi_): Changes to our CI configuration files and scripts.
- **docs**(_readme_): Documentation only changes.
- **feat**: A new feature.
- **fix**: A bug fix.
- **perf**: A code change that improves performance.
- **refactor**: A code change that neither fixes a bug or adds a feature.
- **style**: Changes that do not affect the meaning of the code.
- **test**: Adding missing tests or correcting existing tests.

### Install semantic-release

Go to install [semanctic-release](https://github.com/semantic-release/semantic-release)

`npm install -g semantic-release-cli`

add semantic-release to dev dependencies

```json
"devDependencies": {
  "@commitlint/cli": "^7.2.1",
  "@commitlint/config-conventional": "^7.1.2",
  "semantic-release": "^15.0.0"
}
```

#### Here is an example of the release type that will be done based on a commit messages:

[semantic-release - Commit message format](https://github.com/semantic-release/semantic-release#commit-message-format)

| Commit message                                                                                                                                                                                   | Release type                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------- |
| `fix(pencil): stop graphite breaking when too much pressure applied`                                                                                                                             | Patch Release (0.0.**1**)              |
| `feat(pencil): add 'graphiteWidth' option`                                                                                                                                                       | ~~Minor~~ Feature Release (0.**1**.0)  |
| `perf(pencil): remove graphiteWidth option`<br><br>`BREAKING CHANGE: The graphiteWidth option has been removed.`<br>`The default graphite width of 10mm is always used for performance reasons.` | ~~Major~~ Breaking Release (**1**.0.0) |

### Circle CI for continuous integration

Configure your proyect in [CircleCi](https://circleci.com)

**config.yml** for CircleCi (_change your node version in_ `circleci/node:10.11.0`)

```yml
version: 2
jobs:
  build:
    docker:
      - image: circleci/node:10.11.0

    working_directory: ~/repo

    steps:
      - checkout

      - restore_cache:
          keys:
            - v1-dependencies-{{ checksum "package.json" }}
            - v1-dependencies-

      - run: yarn install

      - save_cache:
          paths:
            - node_modules
          key: v1-dependencies-{{ checksum "package.json" }}

      - run: yarn test

  release:
    docker:
      - image: circleci/node:10.11.0
    steps:
      - checkout
      - run: npm install
      - run: npx semantic-release

workflows:
  version: 2
  test_and_release:
    jobs:
      - build
      - release:
          requires:
            - build
```

Add enviroment variables to CircleCi `GH_TOKEN` and `NPM_TOKEN`

## Automatic release

And now, automatic release on push to master or by merging a pull request or merging from another branch.

## Adding plugins

Install packages:

```
$ npm install @semantic-release/commit-analyzer -D
```

```
$ npm install @semantic-release/release-notes-generator -D
```

```
$ npm install @semantic-release/changelog -D
```

```
$ npm install @semantic-release/npm -D
```

```
$ npm install @semantic-release/github -D
```

```
$ npm install @semantic-release/git -D
```

Second step, set enviroment variables for git plugin in CircleCI:

##### Environment variables

| Variable              | Description                                                                                                                                                              | Default                              |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ |
| `GIT_AUTHOR_NAME`     | The author name associated with the release commit. See [Git environment variables](https://git-scm.com/book/en/v2/Git-Internals-Environment-Variables#_committing).     | @semantic-release-bot.               |
| `GIT_AUTHOR_EMAIL`    | The author email associated with the release commit. See [Git environment variables](https://git-scm.com/book/en/v2/Git-Internals-Environment-Variables#_committing).    | @semantic-release-bot email address. |
| `GIT_COMMITTER_NAME`  | The committer name associated with the release commit. See [Git environment variables](https://git-scm.com/book/en/v2/Git-Internals-Environment-Variables#_committing).  | @semantic-release-bot.               |
| `GIT_COMMITTER_EMAIL` | The committer email associated with the release commit. See [Git environment variables](https://git-scm.com/book/en/v2/Git-Internals-Environment-Variables#_committing). | @semantic-release-bot email address. |

The next steps, create new file in root directory:
[release.config.js](https://github.com/EmanuelGenially/test-automate-release/blob/master/release.config.js)

and modify [commitlint.config.js](https://github.com/EmanuelGenially/test-automate-release/blob/master/commitlint.config.js)

## New commits types:

- **build**(_dependencies_): Changes that affect the build system or external dependencies.
- **ci**(_CircleCi_): Changes to our CI configuration files and scripts.
- **docs**(_readme_): Documentation only changes.
- **feat**: A new feature.
- **fix**: A bug fix.
- **perf**: A code change that improves performance.
- **refactor**: A code change that neither fixes a bug or adds a feature.
- **style**: Changes that affect the styles (css, scss).
- **test**: Adding missing tests or correcting existing tests.
- **revert**: Revert commits or PR.
- **summary**: Resume.
- **format**: Improving structure / format of the code.
- **remove**: Removing code or files.
- **hotfix**: Critical hotfix.
- **initial**: Initial commit.
- **security**: Fixing security issues.
- **ios**: Fixing something on iOS.
- **android**: Fixing something on Android.
- **warnings**: Removing linter warnings.
- **upgrade**: Upgrading dependencies.
- **downgrade**: Downgrading dependencies.
- **wip**: Work in progress.
- **config**: Changing configuration files.
- **langs**: Internationalization and localization.
- **bad**: Writing bad code that needs to be improved.
- **rename**: Moving or renaming files.
- **assets**: Adding or updating assets.
- **changes**: Updating code due to code review changes.
- **texts**: Updating text and literals.
- **addlogs**: Adding logs.
- **removelogs**: Removing logs.
- **ux**: Improving user experience / usability.
- **responsive**: Working on responsive design.
- **experimental**: Experimenting new things.
- **seo**: Improving SEO.
- **merge**: Merging branches.

## Built With

- [commitlint](https://github.com/marionebl/commitlint)
- [Husky](https://github.com/typicode/husky#readme)
- [Angular contribution guideline](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type)
- [semanctic-release](https://github.com/semantic-release/semantic-release)
- [CircleCi](https://circleci.com)
- [gitmoji](https://gitmoji.carloscuesta.me/)
- And :heart:
