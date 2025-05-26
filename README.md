# Automated-Software-Testing-JS

This project implements automated testing using Playwright and testing implemented by BDD methology with Cucumber framework

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

### Running Locally Playwright tests:

#### Basic Test Execution

To run all tests in both Chrome and Firefox:

```bash
npm run test:both
```

To run tests in a specific browser:

```bash
npm run test:chrome
npm run test:firefox
npm run test:webkit
```

#### Parameterized Test Execution

Run tests with custom browser and resolution parameters:

```bash
npm run test -- --browser=chromium --resolution=1920x1080

npm run test -- --browser=firefox --resolution=1366x768
```


### Running Locally Cucumber tests:

To run the tests locally use the following command:

```bash
npm run test:cucumber
```
