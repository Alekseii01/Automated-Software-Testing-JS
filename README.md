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

### Running Locally Cucumber tests:

To run the tests locally use the following command:

```bash
npm run test:cucumber
```
## 05 19 Revision
TODO: 
* Parallel test execution (parametrize launching t is better to not hardcode configurations in environment files for every test scenario. Instead, use a flexible approach where you can dynamically select the browser, resolution, and other options at runtime via the command line. Whether you run tests in one go or separately depends on your project requirements and the capabilities of your testing framework. for example:  npm run test -- --browser=chrome --resolution=1920x1080 )
✅ add for BDD scenarios tags 
* Test Data Separation: Test data is not stored in a separate file or folder. It should be externalized to improve maintainability.
* Locator Encapsulation: Locators are not fully encapsulated within the page object files. They should not appear in the test files.
* Encapsulation: Some tests directly interact with web elements instead of using methods from the page object classes. This violates the encapsulation principle of the POM pattern.
* Parameterized Tests: There is no evidence of parameterized tests with multiple data sets. Tests should include scenarios where the same test is run with different input data.
