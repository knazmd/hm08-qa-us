# Project 8: Urban Routes Testing

## Description
This project aims to write automated tests for the Urban Routes application, covering various functionalities and scenarios. The tests will be written using WebDriverIO and JavaScript to ensure the proper functioning of the application.

## Technologies and Techniques Used
- WebDriverIO
- JavaScript
- Git/GitHub

## Getting Started
To run the tests for this project, follow these steps:

1. Clone the repository to your local computer.
2. Navigate to the project's root directory.
3. Run `npm install` to install the required dependencies.
4. Open the `wdio.conf.js` file and replace the base URL with the Urban Routes server URL generated.
5. Write your tests in the `createAnOrder.e2e.js` file located in the `test/specs` folder.
6. Run the tests using the command `npm wdio`.

Please note that you will need an active internet connection and the Urban Routes server URL to successfully run the tests.

## Test Scenarios
The automated tests cover the following scenarios:

1. Setting the address
2. Selecting the Supportive plan
3. Filling in the phone number
4. Adding a credit card
5. Writing a message for the driver
6. Ordering a Blanket and handkerchiefs
7. Ordering 2 Ice creams
8. Verifying the appearance of the car search modal
9. Waiting for the driver info to appear in the modal (optional)