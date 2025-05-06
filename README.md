# Loan Calculator with Currency Exchange

A web application that allows users to calculate loan payments and view the amortization schedule in different currencies.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)

## Installation

Provide step-by-step instructions on how to get the project running on a local machine.

1.  **Prerequisites:**
    * [Node.js](https://nodejs.org/) (version >= X.X.X)
    * [npm](https://www.npmjs.com/) (version >= Y.Y.Y) or [yarn](https://yarnpkg.com/) (version >= Z.Z.Z)
    * (Mention any other dependencies like a specific database if you're using one)

2.  **Clone the repository:**

    ```bash
    git clone https://github.com/f2firdaus/Loan_Calculator
   live demo link:  https://loanemicalculator1.netlify.app/

3.  **Install dependencies:**

    Using npm:
    ```bash
    npm install
    ```
    

4.  **Run the application:**

    ```bash
    npm start
    # or
    yarn start
    ```

    This will typically start the development server at `http://localhost:5173`.

5. ## Usage

Explain how to use the loan calculator and currency exchange features.

1.  **Loan Calculation:**
    * Navigate to the home page (`/`).
    * Enter the loan amount in the "Loan Amount" field.
    * Enter the annual interest rate in the "Interest Rate (%)" field.
    * Enter the loan term in years in the "Term (Years)" field.
    * Click the "CALCULATE" button.
    * The monthly EMI and amortization schedule will be displayed below.

2.  **Currency Exchange:**
    * A dropdown menu labeled "Currency" allows you to select a different currency.
    * Upon selecting a new currency, the loan amounts in the amortization table will be converted to the chosen currency, and the appropriate currency code will be displayed.

3. ## Features

* Calculates monthly EMI (Equated Monthly Installment) for a loan.
* Generates a detailed amortization schedule showing principal, interest paid, and remaining balance for each month.
* Allows users to select different currencies from a dropdown.
* Dynamically converts the loan amounts in the amortization schedule to the selected currency using real-time (or near real-time) exchange rates fetched from an API.
* Displays the currency code (e.g., USD, INR, EUR) alongside the loan amounts.


## Technologies Used

* [React](https://react.dev/) - Frontend JavaScript library for building the user interface.
* [Material UI](https://mui.com/) - Component library for a consistent and responsive UI.
* [axios](https://axios-http.com/) - Promise-based HTTP client for making API requests.
* (Mention any other libraries or tools you used, e.g., state management libraries like useState, custom hooks you created like `useExchangeRates`, routing libraries if you used them explicitly outside of the main app)





---

