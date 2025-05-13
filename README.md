# Automated-Software-Testing-JS

This project implements automated testing using Playwright.

## Project Setup

### Prerequisites

Before running the tests, ensure that the following tools are installed:

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installing Dependencies

1. Clone the repository:

    ```bash
    git clone https://github.com/Alekseii01/Automated-Software-Testing-JS.git
    cd Automated-Software-Testing-JS
    ```

2. Install the necessary dependencies:

    ```bash
    npm install
    ```

3. Install Playwright and the necessary browser binaries:

    ```bash
    npx playwright install
    ```

## Running Tests

### Running Locally

To run the tests locally in Chrome and Firefox, use the following command:

```bash
npm run test:both
```

To run only for a specific one:

```bash
npm run test:chrome
```
or
```bash
npm run test:firefox
```

To open HTML report run:

```bash
npm run test:reports
```
