# playwright-batect [![Playwright Tests](https://github.com/ISanjeevKumar/playwright-batect/actions/workflows/playwright.yml/badge.svg)](https://github.com/ISanjeevKumar/playwright-batect/actions/workflows/playwright.yml)

This is a project that uses Batect to run Playwright tests.

## Prerequisites

- Node.js
- Yarn
- Docker

## Dockerfile

A Dockerfile is a script that contains a list of commands that the Docker daemon calls while creating an image. Each command in the Dockerfile adds a new layer to the image.

Here is an example of Playwright's Dockerfile:

```Dockerfile
FROM mcr.microsoft.com/playwright:v1.29.0-focal

RUN mkdir /workdir

WORKDIR /workdir

COPY . /workdir/
```

Explanation of each command:

- FROM specifies the base image that the Docker image will be built on top of. In this case, the base image is mcr.microsoft.com/playwright:v1.29.0-focal.

- RUN runs a command in a new layer on top of the current image and commits the results. In this case, the command mkdir /workdir creates a new directory called workdir.

- WORKDIR sets the working directory for subsequent RUN, CMD, ENTRYPOINT, COPY and ADD commands. In this case, it sets the working directory to /workdir.

- COPY copies new files or directories from the source and adds them to the filesystem of the container at the specified path. In this case, the . refers to the current directory and /workdir/ is the destination directory in the container. This command copies all files and directories from the current directory to the /workdir/ directory in the container.

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
