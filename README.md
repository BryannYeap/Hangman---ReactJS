# HANGMAN

This is a solo web development project using HTML, CSS, and JavaScript, making use of the ReactJS framework. The project itself is a game called [Hangman](<https://en.wikipedia.org/wiki/Hangman_(game)>).

Navigate here to try out this web project yourself: [HANGMAN PROJECT](https://hang-man-react-js.netlify.app/)

## Notable Features

### Keyboard and Mouse

You can use either your keyboard or mouse to provide input.

### Media responsiveness

The game will react responsively and shrink or grow according to the resolution of the users' media screen. For instance,

Desktop View (1280x720):

![desktop-view](/resources/images/1280x720.PNG)

Tablet View (960x600):

![tablet-view](/resources/images/960x600.PNG)

Mobile View (360x640):

![mobile-view](/resources/images/360x640.PNG)

### SVG

The hangman drawing was manually made using SVG.

### CSS

- The man getting hung has slight animation made using CSS's keyframes
- Hovering over letter that have not been guessed result in a change of cursor and colour to indicate that they are guessable.
- After guessing a letter, it will be blacked out. Additionally, hovering over them will no longer result in a change of cursor, nor colour, indicating that they are not guessable.
- Restart game button also changes the cursor and colour upon hovering. Additionally, the button shrinks a little upon pressing the button.

# Developer Guide

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm install`

If the app is not able to run due to missing dependencies, you can try running this command before starting the app.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
