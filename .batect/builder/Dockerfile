FROM mcr.microsoft.com/playwright:v1.28.0-focal

ENV PLAYWRIGHT_BROWSERS_PATH=0
RUN mkdir /workdir

WORKDIR /workdir

COPY . /workdir/

RUN npx playwright install