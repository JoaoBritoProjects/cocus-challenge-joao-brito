# Get the docker image of Playwright
FROM mcr.microsoft.com/playwright:v1.29.0-focal

# set working directory
RUN mkdir /e2e
WORKDIR /e2e

# copy all files into the container
COPY . /e2e

# Install dependencies
RUN npm install