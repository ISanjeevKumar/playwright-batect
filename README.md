# playwright-batect

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

## batect Setup

This command will create a new batect.yml file in the current directory, as well as a .batect folder that contains the Batect builder files.

```
batect init
```

## Acknowledgements

- Playwright
- Batect
