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

2. Switch to the demoqa-tests branch:

    ```bash
    git checkout demoqa-tests
    ```

3. Install the necessary dependencies:

    ```bash
    npm install
    ```

4. Install Playwright and the necessary browser binaries:

    ```bash
    npx playwright install
    ```

## Running Tests

### Running Locally

To run the tests locally in Chrome and Firefox, use the following command:

```bash
npx playwright test
```

To run only for a specific one:

```bash
npx playwright test --project=Chrome@1920x1080
```
or
```bash
npx playwright test --project=Chrome@1366x768
```

To open HTML report run:

```bash
npx playwright show-report reports
```