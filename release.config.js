module.exports = {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        releaseRules: [
          {
            type: 'docs',
            release: 'patch'
          },
          {
            type: 'refactor',
            release: 'patch'
          },
          {
            type: 'style',
            release: 'patch'
          },
          {
            type: 'summary',
            release: 'patch'
          },
          {
            type: 'format',
            release: 'patch'
          },
          {
            type: 'remove',
            release: 'patch'
          },
          {
            type: 'hotfix',
            release: 'patch'
          },
          {
            type: 'initial',
            release: 'patch'
          },
          {
            type: 'security',
            release: 'patch'
          },
          {
            type: 'ios',
            release: 'patch'
          },
          {
            type: 'android',
            release: 'patch'
          },
          {
            type: 'warnings',
            release: 'patch'
          },
          {
            type: 'upgrade',
            release: 'patch'
          },
          {
            type: 'downgrade',
            release: 'patch'
          },
          {
            type: 'wip',
            release: 'patch'
          },
          {
            type: 'config',
            release: 'patch'
          },
          {
            type: 'langs',
            release: 'patch'
          },
          {
            type: 'bad',
            release: 'patch'
          },
          {
            type: 'rename',
            release: 'patch'
          },
          {
            type: 'assets',
            release: 'patch'
          },
          {
            type: 'changes',
            release: 'patch'
          },
          {
            type: 'texts',
            release: 'patch'
          },
          {
            type: 'addlogs',
            release: 'patch'
          },
          {
            type: 'removelogs',
            release: 'patch'
          },
          {
            type: 'ux',
            release: 'patch'
          },
          {
            type: 'responsive',
            release: 'patch'
          },
          {
            type: 'experimental',
            release: 'patch'
          },
          {
            type: 'seo',
            release: 'patch'
          },
          {
            type: 'merge',
            release: 'patch'
          }
        ]
      }
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'angular',
        writerOpts: {
          transform: (commit, context) => {
            const issues = [];

            commit.notes.forEach(note => {
              note.title = `:boom: BREAKING CHANGES`;
            });

            if (commit.type === `feat`) {
              commit.type = `:sparkles: Introducing new features`;
            } else if (commit.type === `fix`) {
              commit.type = `:bug: Fixing a bug`;
            } else if (commit.type === `perf`) {
              commit.type = `:zap: Improving performance`;
            } else if (commit.type === `revert`) {
              commit.type = `:rewind: Reverting changes`;
            } else if (commit.type === `docs`) {
              commit.type = `:memo: Writing documentation`;
            } else if (commit.type === `style`) {
              commit.type = `:lipstick: Updating the UI and style files`;
            } else if (commit.type === `refactor`) {
              commit.type = `:recycle: Code Refactoring`;
            } else if (commit.type === `test`) {
              commit.type = `:white_check_mark: Adding tests`;
            } else if (commit.type === `build`) {
              commit.type = `:construction_worker: Build System`;
            } else if (commit.type === `ci`) {
              commit.type = `:green_heart: Continuous Integration`;
            } else if (commit.type === `summary`) {
              commit.type = `:bulb: Summary`;
            } else if (commit.type === `format`) {
              commit.type = `:art: Improving structure / format of the code`;
            } else if (commit.type === `remove`) {
              commit.type = `:fire: Removing code or files.`;
            } else if (commit.type === `hotfix`) {
              commit.type = `:ambulance: Critical hotfix`;
            } else if (commit.type === `deploy`) {
              commit.type = `:rocket: Deploying stuff`;
            } else if (commit.type === `initial`) {
              commit.type = `:tada: Initial commit`;
            } else if (commit.type === `security`) {
              commit.type = `:lock: Fixing security issues`;
            } else if (commit.type === `ios`) {
              commit.type = `:green_apple: Fixing something on iOS`;
            } else if (commit.type === `android`) {
              commit.type = `:robot: Fixing something on Android`;
            } else if (commit.type === `warnings`) {
              commit.type = `:rotating_light: Removing linter warnings`;
            } else if (commit.type === `wip`) {
              commit.type = `:construction: Work in progress`;
            } else if (commit.type === `upgrade`) {
              commit.type = `:arrow_up: Upgrading dependencies`;
            } else if (commit.type === `downgrade`) {
              commit.type = `:arrow_down: Downgrading dependencies`;
            } else if (commit.type === `config`) {
              commit.type = `:wrench: Changing configuration files`;
            } else if (commit.type === `langs`) {
              commit.type = `:globe_with_meridians: Internationalization and localization`;
            } else if (commit.type === `bad`) {
              commit.type = `:hankey: Writing bad code that needs to be improved`;
            } else if (commit.type === `rename`) {
              commit.type = `:truck: Moving or renaming files`;
            } else if (commit.type === `assets`) {
              commit.type = `:bento: Adding or updating assets`;
            } else if (commit.type === `changes`) {
              commit.type = `:ok_hand: Updating code due to code review changes`;
            } else if (commit.type === `texts`) {
              commit.type = `:speech_balloon: Updating text and literals`;
            } else if (commit.type === `addlogs`) {
              commit.type = `:loud_sound: Adding logs`;
            } else if (commit.type === `removelogs`) {
              commit.type = `:mute: Removing logs`;
            } else if (commit.type === `ux`) {
              commit.type = `:children_crossing: Improving user experience / usability`;
            } else if (commit.type === `responsive`) {
              commit.type = `:iphone: Working on responsive design`;
            } else if (commit.type === `experimental`) {
              commit.type = `:alembic: Experimenting new things`;
            } else if (commit.type === `seo`) {
              commit.type = `:mag: Improving SEO`;
            } else if (commit.type === `merge`) {
              commit.type = `:twisted_rightwards_arrows: Merging branches`;
            } else if (commit.type === `chore`) {
              commit.type = `:bookmark: Releasing / Version tags`;
            } else {
              commit.type = `:alien: Automatic`;
            }

            if (commit.scope === `*`) {
              commit.scope = ``;
            }

            if (typeof commit.hash === `string`) {
              commit.hash = commit.hash.substring(0, 7);
            }

            if (typeof commit.subject === `string`) {
              let url = context.repository
                ? `${context.host}/${context.owner}/${context.repository}`
                : context.repoUrl;
              if (url) {
                url = `${url}/issues/`;
                // Issue URLs.
                commit.subject = commit.subject.replace(
                  /#([0-9]+)/g,
                  (_, issue) => {
                    issues.push(issue);
                    return `[#${issue}](${url}${issue})`;
                  }
                );
              }
              if (context.host) {
                // User URLs.
                commit.subject = commit.subject.replace(
                  /\B@([a-z0-9](?:-?[a-z0-9]){0,38})/g,
                  `[@$1](${context.host}/$1)`
                );
              }
            }

            // remove references that already appear in the subject
            commit.references = commit.references.filter(reference => {
              if (issues.indexOf(reference.issue) === -1) {
                return true;
              }

              return false;
            });

            return commit;
          }
        }
      }
    ],
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
        changelogTitle: '# Change Log'
      }
    ],
    [
      '@semantic-release/npm',
      {
        npmPublish: false
      }
    ],
    '@semantic-release/github',
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'CHANGELOG.md']
      }
    ]
  ]
};
