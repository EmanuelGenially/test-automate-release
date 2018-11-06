module.exports = {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
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
          }
        ]
      }
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        parserOpts: {},
        writerOpts: {
          transform: {}
        }
      }
    ],
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md'
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
        assets: ['package.json']
      }
    ]
  ]
};
