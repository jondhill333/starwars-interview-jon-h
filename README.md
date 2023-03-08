# UW frontend bug fixing exercise

This project is a basic unstyled React SPA that displays information about StarWars characters from the [StarWars API (SWAPI)](https://swapi.dev/documentation).

It has been intentionally badly written with numerous bugs, bad decisions, code smells and inconsistencies.

It displays a list of people. For each item it should show:
- Their name
- Their birth date in the original "BBY" format returned from the SWAPI
- The year of their birth extracted from the birth date
- Whether their birth year is an even or odd number


## Part 1: bug fixing and refactoring
Identify, discuss and fix the issues you can see in the code. Feel free to ask questions and collaborate.

## Part 2: search
Add a text field that filters the results using the [`search` parameter](https://swapi.dev/documentation#search) described in the SWAPI documentation.

## Part 3: details page
Add a separate page that accepts an ID of a StarWars character via a parameter in the URL. It should load the character from the SWAPI and display their name.

The main page that lists characters should link to this page.

This task will likely require use of [React Router](https://reactrouter.com/en/main) or a similar library. Feel free to Google for a hello world example when setting this up.

## Part 4: sharing button
Add a "Share" button to the details page that uses the [Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API) to trigger the browser's native sharing dialog.
This should allow a user to share the detail page URL with somebody.
