# calc.js

A command-line calculator written in Node.js with Mocha for testing. Tutorial from Tania Rascia [link](https://www.taniarascia.com/unit-testing-in-javascript/).

## Installation

1. Clone the repo `$ git clone https://github.com/ajtran303/node_calc.git`
1. Change into it `$ cd node_calc`
1. Install the project `$ npm i`
1. Run the tests `$ npm test`

## Usage

To start the calculator, run `node calc.js`

Follow the command line prompts to use the calculator.

## Operations

Currently, any two numbers can be:

- Added
- Subtracted
- Multiplied
- Divided

## Validation

The calculator will know if you don't give it a number! It will give you a warning!!!

## Example

```
$ node calc.js

calc.js

Welcome to the Node.js Calculator app!
Version: 1.0.0.

Usage: The user will be prompted for two numbers,
then asked to select their operation of choice.

Enter the first number: 1
Enter the second number: 2

      Please select from the following options:

      [1] Addition (+)
      [2] Subtraction (-)
      [3] Multiplication (*)
      [4] Division (/)

      Enter your choice: 3
The product of 1 and 2 is 2.
```
