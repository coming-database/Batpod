# Batpod

![batpod](./docs/images/batpod.jpg)

## Table of Contents

- [Intergrate Airbnb Style Guide with ESLint and Prettier](#intergrate-airbnb-style-guide-with-eslint-and-prettier)

## Intergrate Airbnb Style Guide with ESLint and Prettier

Basicly intergration solution followed the guide write on [Integrating Prettier + ESLint + Airbnb Style Guide in VSCode](https://blog.echobind.com/integrating-prettier-eslint-airbnb-style-guide-in-vscode-47f07b5d7d6a). But there are some custom updates:

- Add `browser` to `env` to support browser global variables ([No more env: browser? #1002](https://github.com/airbnb/javascript/issues/1002))
- Allow `.js` as JSX file name extension
- Allow devDependencies import in webpack ([The `imports` in tests for the rule `import/no-extraneous-dependencies` #959](https://github.com/airbnb/javascript/issues/959))

Other Refrences:

- [Trouble with react/jsx-one-expression-per-line #1921](https://github.com/yannickcr/eslint-plugin-react/issues/1921)

## TODO

- Study Firebase CDN and Cache
- Build Optimize
