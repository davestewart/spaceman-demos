# Spaceman Demos

> Demo repository for Spaceman CLI

<p align="center">
  <img src="https://raw.githubusercontent.com/davestewart/spaceman/master/res/splash.png" alt="Spaceman">
</p>

## Intro

This repository contains demo monorepos to test [Spaceman](https://github.com/davestewart/spaceman/) with:

- [NPM](./npm)
- [PNPM](./pnpm)
- [Yarn](./yarn)

You can use this repo to:

- [Demo](#demo) Spaceman's capabilities
- [Develop](#development) Spaceman itself

## Setup

### Demo

To set up the demo:

```bash
# clone the repo
git clone https://github.com/davestewart/spaceman-demos.git
cd spaceman-demos

# install demo dependencies
npm i

# install each of the demo repositories
npm run install
```

### Development

To set up Spaceman to run with the demo:

```bash
# clone the repo
git clone https://github.com/davestewart/spaceman.git

# install dependencies
cd spaceman
npm i

# set up global links
npm link
pnpm link --global
yarn link
```

You should then re-run the demo install script to set up the local links:

```bash
cd ../spaceman-demos
npm run install
```

## Running the demos

Each of the demos is a separate repository, and you will need to `cd` into each one to run it:

```
cd demos/npm
```

Once in, you should be able to run Spaceman by just typing:

```
spaceman
```

## Troubleshooting

### Installing package managers

You will need each package manager installed globally to run the related demo.

To test which managers are installed, use `which`:

```bash
which pnpm
# /Users/Dave/.npm-packages/bin/pnpm

which npm
# /usr/local/bin/npm

which yarn
# /usr/local/bin/yarn
```

If you need to install these managers, you can do so here:

- [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [PNPM](https://pnpm.io/installation)
- [Yarn](https://yarnpkg.com/getting-started/install)

### Running Spaceman

Running the vanilla `spaceman` command assumes that your system `$PATH` contains `./node_modules/.bin/`.

If you don't have it (or prefer not to add it) you can call Spaceman directly:

```bash
node ./node_modules/.bin/spaceman
```

Or add `spaceman` as a `package.json` script:

```JSON
"spaceman": "node ./node_modules/.bin/spaceman",
```

Then run with `npm run spaceman`.
