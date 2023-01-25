General notes

1 - The test automation was developed using Playwright 

2 - The Page Object Models was used in order to allow an easy readability and scalability

3 - The tests can be executed on chromium, webkit or firefox according to the command line input 

Setup and execution

1 - Install docker

2 - On a new terminal, navigate to the directory 'cocus-challenge-joao-brito'

3 - Execute the command:

3.1 - 'docker build -t cocus-challenge-joao-brito-docker-image .'

3.2 - 'docker run -it --volume /e2e/node_modules -v $PWD\:/e2e cocus-challenge-joao-brito-docker-image'

4 - To execute the tests, use the command 'npx playwright test --project={browser}', with {browser} equal to 'chromium' (default), 'firefox', or 'webkit'

4.1 - example: 'npx playwright test --project=firefox'

5 - After test execution, the report file can be found on the directory 'outputs/html-test-reports'

6 - In case of failure, a screenshot is created on the directory 'outputsscreenshots' exploring the respective page
