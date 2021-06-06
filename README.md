# Portfolio page
View the live page running on [Github pages](https://tederlandsson.github.io/portfolio/)

The application is built with TypeScript and React, and is powered by Github pages.

# Building
* Build locally using `yarn start`
* Build production build using `yarn build`


# Deploying
* Predeploy: `yarn predeploy`
* Deploy: `yarn deploy`

# Repository structure


## React components [`src/components/`](src/components)
React components are implemented here

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