# Test automate release

- Lint for commits
- Commit messages
- Circle CI for continuous integration
- And automatic release on push to master or by merging a pull request or merging from another branch

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

**types**, **name**

- **build**: Changes that affect the build system or external dependencies.
- **ci**: Changes to our CI configuration files and scripts.
- **docs**: Documentation only changes.
- **feat**: A new feature.
- **fix**: A bug fix.
- **perf**: A code change that improves performance.
- **refactor**: A code change that neither fixes a bug or adds a feature.
- **style**: Changes that do not affect the meaning of the code.
- **test**: Adding missing tests or correcting existing tests.

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

- [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
- [Maven](https://maven.apache.org/) - Dependency Management
- [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

- **Billie Thompson** - _Initial work_ - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc
