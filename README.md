[![CodeQL](https://github.com/webceyhan/rock-paper-scissors-game/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/webceyhan/rock-paper-scissors-game/actions/workflows/codeql-analysis.yml)
[![Build and Deploy](https://github.com/webceyhan/rock-paper-scissors-game/actions/workflows/build-and-deploy.yml/badge.svg)](https://github.com/webceyhan/rock-paper-scissors-game/actions/workflows/build-and-deploy.yml)

 <!-- Title -->

# Rock Paper Scissors Game

<!-- Description -->

This is a single-play implementation of the famous Rock-Paper-Scissors game.

The application is built with Vite + Vue 3 + Bootstrap and written in TypeScript.
There is no need for backend server as it only works in single-play mode against the computer.

[View Demo](https://ceyhan.io/rock-paper-scissors-game/) |
[Report Issue](https://github.com/webceyhan/rock-paper-scissors-game/issues) |
[Request Feature](https://github.com/webceyhan/rock-paper-scissors-game/pulls) |
[@webceyhan](https://twitter.com/webceyhan)

<br>
<!-- Built With -->

## Built With

-   [Node.js](https://nodejs.dev/)
-   [Vite](https://vitejs.dev/)
-   [Vue.js](https://vuejs.org/)
-   [Bootstrap](https://getbootstrap.com)
-   [TypeScript](https://www.typescriptlang.org/)

<br>
<!-- Prerequisites -->

## Prerequisites

You need to install the [Node.js](https://nodejs.dev/) and npm package manager first.

```sh
npm install npm@latest -g
```

> Recommended IDE settings:
> [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

<br>
<!-- Installation -->

## Installation

1. Clone the repository.
    ```sh
    git clone https://github.com/webceyhan/rock-paper-scissors-game.git
    ```
2. Get inside the cloned project folder.
    ```sh
    cd <project folder>
    ```
3. Install NPM packages.
    ```sh
    npm install
    ```

<br>
<!-- Usage Examples -->

## Usage

You can use following commands to do various task with the project.

```sh
npm run dev             # start development server
npm run build           # build for production
npm run preview         # preview built app
```

### Game Rules
![Rules](./src/assets/rules.png)

<br>
<!-- Deploy -->

## Deploy (GitGub Pages)

There is a built-in Github Action which automatically deploys the project to Github Pages on every push.

The workflow below, will checkout the master branch first, then build the project using npm and outputs the result to the `dist` folder.
Afterwards, the contents will be deployed to the `gh-pages` branch.

```yaml
name: Build and Deploy
on:
push:
    branches:
    - master
jobs:
build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
        uses: actions/checkout@v2

    - name: Install and Build
        run: |
        npm ci
        npm run build

    - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4.2.2
        with:
        branch: gh-pages # The branch the action should deploy to.
        folder: dist # The folder the action should deploy.
```

<br>
<!-- Roadmap -->

## Roadmap

-   [ ] Improve state management
-   [ ] Add multiplay support using WebSockets

> See the [open issues](https://github.com/webceyhan/rock-paper-scissors-game/issues) for a full list of proposed features (and known issues).

<br>
<!-- Acknowledgments -->

## Acknowledgments

-   Project hosted on [GitHub Pages](https://pages.github.com/)
-   Project deployed with [GitHub Actions](https://docs.github.com/en/actions)
    -   using [github-pages-deploy-action](https://github.com/JamesIves/github-pages-deploy-action)
