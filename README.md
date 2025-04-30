Pre-requisites
Node.js: Install Node.js (version 16 or higher) from Node.js Official Website.
Git: Ensure Git is installed to clone the repository.

Installation Guide
1. Clone the Repository
Clone the projectrepository to your local machine:

git clone https://github.com/sachinkoirala/PlaywrightCoverGo.git

Navigate to the project directory:

cd PlaywrightCoverGo

2. Install Dependencies
Ensure you have Node.js installed (version 16 or higher). Install the required dependencies using npm:

npm install

3. Install Playwright Browsers
Playwright requires browser binaries to run tests. Install them using:

npx playwright install

Running the Tests
1. Run All Tests
To execute all tests in the project, use:

npm test

2. Run Tests in Headed Mode
To run tests with a visible browser (headed mode), use:

npm test --headed

4. Generate Allure Report Manually
If the Allure report does not open automatically, you can generate and open it manually:

npx allure generate test-results/allure-results --clean -o test-results/allure-report
npx allure open test-results/allure-report