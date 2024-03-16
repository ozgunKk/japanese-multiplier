# Japanese Multiplication
 A simple calculator that multiplies numbers as we normally do, 
but with a visual twist. It adds a visual representation of the multiplication
process, inspired by the Japanese multiplication method, which mostly used in
elementary schools. The visual representation is a fun way to learn the
multiplication process.

 The calculator also has some easter eggs . Try to find them! In case you want see all the easter egg scenarios, all written at the end of the page.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of Node.js and npm.
- You have a Windows/Linux/Mac machine.

### Installing Visual Calculator For Japanese Multiplication Method

To install Visual Calculator For Japanese Multiplication Method, follow these steps:

1. Clone the repository:

git clone https://github.com/ozgunKk/japanese-multiplier/

2. Navigate to the project directory:

cd japanese-multiplier

3. Install dependencies:

npm install

4. Start the application:

To run on your preferred browser

npm run dev

To run as a desktop app:

npm run electron:dev

* In case you get "prop-types" error, run this command:</span>
npm install --save prop-types

and then try running the desired npm run command again.


## Built With

This project is built with the following technologies:

- [React JS](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Used for styling the application.

## Author

* Oz - ozgun.slash@gmail.com, https://github.com/ozgunKk

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

 The user shall know that, while I developed this app, I took into account natural numbers less than 100. The reason is that the method is not useful with large numbers. Also, the main idea behind this app is to teach a method for multiplication to children, via an easy-to-use app with an understandable UI. For that reason, I wanted to skip the logic of implementing the visualizing of numbers with three digits.

 Another thing the consider; even though I have experience with developing with React, I didn't have any prior experience with creating a desktop application from it. So I created a desktop app using Electron, but ı can't say that I'm so happy with the window that appears at the moment.

## Easter Eggs:
1. An easter egg series with three different prompts and photoa can be seen after clicking the '猫' button. The user can either press to the '猫' button again or to the cat image to see the next prompt, until the third one that says 'Time for math!'. The user can start entering number anytime he/she wants without clicking any other number
2. A cat appears to alert the user in case he/she tries to enter a number with more than 2 digits.
3. If the user press the calculate button (=) without entering two of the required numbers, a cat will appear for warning.
4. The last one is for my Turkish bro's! If the result is 333, you'll see another easter egg.
