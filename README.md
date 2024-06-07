![](https://img.shields.io/badge/Built%20with%20%E2%9D%A4%EF%B8%8F-at%20Technologiestiftung%20Berlin-blue)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

# shareable semantic-release-config

shareable semantic-release-config

## Installation

```bash
npm install @technologiestiftung/semantic-release-config
```

## Usage

Add file called release.config.js to your repo

```js
module.exports = {
  extends: '@technologiestiftung/semantic-release-config',
};
```

If you use a staging/production environment, where staging is the branch staging and production is deployed from main it is wise to add an additional package to do some backmerging. Install it using npm `npm i -D @saithodev/semantic-release-backmerge` and add it as a plugin to your config, referencing the right branches.

```

module.exports = {
  branches: [
        { name: "main" },
        { name: "staging", channel: "pre/rc", prerelease: "rc" }, // `prerelease` is built with the template `${name.replace(/^pre\\//g, "")}`
    ],
plugins: [
		[
			"@saithodev/semantic-release-backmerge",
			{
				backmergeBranches: [{from: "main", to: "staging"}],
				backmergeStrategy: "merge",
			},
		],
	],
  }
```

Overwrite possible keys. See the [semantic-release docs](https://semantic-release.gitbook.io/semantic-release/usage/configuration#extends). If operating with protected branches, you can need to set the option `persist-credentials: false` in your workflow file on the `actions/checkout@v3` step.

```yaml
steps:
  - uses: actions/checkout@v3
    with:
      persist-credentials: false
```

See also this repos [.github/workflows/test-and-release.yml](./.github/workflows/test-and-release.yml) how to use this in GitHub Actions.

Needs a Personal Access Token with `repo` scope to be set as `GH_TOKEN` in the repo secrets and a `NPM_TOKEN` with `write` scope.

## Development

Do your thing. Early stages.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://fabianmoronzirfas.me/"><img src="https://avatars.githubusercontent.com/u/315106?v=4?s=64" width="64px;" alt="Fabian Morón Zirfas"/><br /><sub><b>Fabian Morón Zirfas</b></sub></a><br /><a href="https://github.com/technologiestiftung/semantic-release-config/commits?author=ff6347" title="Documentation">📖</a> <a href="https://github.com/technologiestiftung/semantic-release-config/commits?author=ff6347" title="Code">💻</a> <a href="#infra-ff6347" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
      <td align="center"><a href="http://vogelino.com"><img src="https://avatars.githubusercontent.com/u/2759340?v=4?s=64" width="64px;" alt="Lucas Vogel"/><br /><sub><b>Lucas Vogel</b></sub></a><br /><a href="https://github.com/technologiestiftung/semantic-release-config/commits?author=vogelino" title="Documentation">📖</a> <a href="#ideas-vogelino" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/technologiestiftung/semantic-release-config/pulls?q=is%3Apr+reviewed-by%3Avogelino" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/technologiestiftung/semantic-release-config/commits?author=vogelino" title="Code">💻</a></td>
      <td align="center"><a href="http://www.awsm.de"><img src="https://avatars.githubusercontent.com/u/434355?v=4?s=64" width="64px;" alt="Ingo Hinterding"/><br /><sub><b>Ingo Hinterding</b></sub></a><br /><a href="https://github.com/technologiestiftung/semantic-release-config/commits?author=Esshahn" title="Documentation">📖</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## Content Licensing

## Credits

<table>
  <tr>
    <td>
      Made by <a src="https://citylab-berlin.org/de/start/">
        <br />
        <br />
        <img width="200" src="https://citylab-berlin.org/wp-content/uploads/2021/05/citylab-logo.svg" />
      </a>
    </td>
    <td>
      A project by <a src="https://www.technologiestiftung-berlin.de/">
        <br />
        <br />
        <img width="150" src="https://citylab-berlin.org/wp-content/uploads/2021/05/tsb.svg" />
      </a>
    </td>
    <td>
      Supported by <a src="https://www.berlin.de/rbmskzl/">
        <br />
        <br />
        <img width="80" src="https://citylab-berlin.org/wp-content/uploads/2021/12/B_RBmin_Skzl_Logo_DE_V_PT_RGB-300x200.png" />
      </a>
    </td>
  </tr>
</table>

## Related Projects

- [github.com/semantic-release/gitlab-config](https://github.com/semantic-release/gitlab-config)
