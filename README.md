# playwright-batect [![Playwright Tests](https://github.com/ISanjeevKumar/playwright-batect/actions/workflows/playwright.yml/badge.svg)](https://github.com/ISanjeevKumar/playwright-batect/actions/workflows/playwright.yml)

This is a project that uses Batect to run Playwright tests.

## Prerequisites

- Node.js
- Yarn
- Docker

## Setup

1. Clone the repository:

```
git clone https://github.com/ISanjeevKumar/playwright-batect.git
```

2. Install the dependencies:

```
batect install
```

## Running the tests

To run the tests, use the following command:

```
batect test
```

This will run the Playwright tests in the specified browser (Chrome, by default).

## Configuration

You can configure the browser to use for the tests by setting the PLAYWRIGHT_BROWSER environment variable. For example:

```
batect --env PLAYWRIGHT_BROWSER=firefox test
```

This will run the tests in Firefox.

## Here are a few benefits of using Batect in a project:

1. Batect makes it easy to define and run tasks that involve multiple containers and complex dependencies. This can help streamline the development and deployment process and reduce the risk of errors.

2. Batect integrates seamlessly with Docker, allowing you to build, run, and manage containers using a single tool. This can help reduce the complexity of your workflow and make it easier to manage multiple containers and environments.

3. Batect provides a simple, declarative syntax for defining tasks and dependencies, which can make it easier to understand and maintain your project's configuration.

4. Batect integrates with popular CI/CD tools, such as Jenkins and GitHub Actions, making it easy to automate your build and deployment process.

5. Batect provides detailed logs and error messages, which can help you troubleshoot issues and debug problems more efficiently.

Overall, using Batect can help you build, test, and deploy your applications more quickly and reliably, while also reducing the complexity of your workflow.

## Acknowledgements

- Playwright
- Batect
