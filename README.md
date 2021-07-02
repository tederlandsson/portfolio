# Portfolio page
View the live page running on [Github pages](https://tederlandsson.github.io/portfolio/)

The application is built with TypeScript and React, and is powered by Github pages.


# Getting started
## Dependencies
* NodeJS
* TypeScript
* Yarn


## Install dependencies
If you have NodeJS, TypeScript and Yarn already installed on your system, you can simply install the Node modules by running the `yarn` command.

Else, you will need to install the dependecies first before using `yarn` to install the Node modules. This can be done using for example [Homebrew](https://brew.sh) on Mac OS.

**Install Homebrew**
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**Dependencies**
```bash
deps=(node typescript yarn) && brew install ${deps[@]}
```

# Building
* Start development server: `yarn start`
* Create production build using `yarn build`


# Deploying
Deployment is done to [Github pages](https://tederlandsson.github.io/portfolio/)
* Predeploy: `yarn predeploy`
* Deploy: `yarn deploy`
* These steps can be chained to perform the deployment:
```
yarn predeploy && yarn deploy
```

# Repository structure

## Workflows [`.github/workflows`](.github/workflows)
Contains workflows used for Github actions.

## React components [`src/components/`](src/components)
React components are implemented here.

## Static content [`src/config`](src/config)
This directory holds static content such as text and icons.

## Tests [`cypress/`](cypress/)
Tests are implemented using [Cypress](https://www.cypress.io/) and can run by
```bash
yarn cy:run
```

* Smoke tests: [`cypress/integration/smoke.spec.ts`](cypress/integration/smoke.spec.ts)
  * This smoke test is when a pull request is opened against the `master` or `delevopment` branch (see [`.github/workflows/smoke_test.yml`](.github/workflows/smoke_test.yml))
* Cypress configuration: [`cypress/fixtures/config.ts`](cypress/fixtures/config.ts)
* Page elements assignment: [`cypress/fixtures/pageElements.ts`](cypress/fixtures/pageElements.ts)