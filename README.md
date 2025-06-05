# React Starter Kit

##### Introduction

This is my personal starter kit for react apps in 2025.

- React
- Vite
- React-router
- Dotenv
- Redux
- Redux Toolkit
- MUI
- SCSS
- Dotenv
- ESLint
- Prettier
- Vitest

##### Features in the starter kit:

- Setup the routing and protected routes with login redirect
- Setup the store and a few reducers (auth, common) and the store reset action
- Added a sample test and command to run the tests
- Setup the Prettier and ESLint configs.
- Created a shared layout between the inner app pages
- Added a few components - link/list/progress/suspense-loader/typography

### Getting started

#### Prerequisites

- Install the latest stable versions of `node` and `npm`.

  \*`node` > v20 is required to run the project.

#### Running the app

```
npm install
npm run dev
```

You can now access the app at `localhost:8080` in your browser.

### Roadmap

`TODO`

### Contributing

#### Prerequisites

Make sure the ESLint extension in installed in your Code Edtior of choice so you can see the errors.

### Tests

#### Testing config

You can find the setup for vitest @ `/vite.config.ts` in the project root folder.

#### Adding tests

In the component or feature you want to test add a `__tests__` folder and your `.test.ts` or `.spec.ts` files. Vitest will detect and run them.

#### Running tests

`npm run test`

### Build

`npm run build`
