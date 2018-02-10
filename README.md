# React Tap App

## Description

![](src/assets/images/component-structure.jpg)

### React vs Angular differences
* React components contain all the info they need to display and operate, with the exception of data passed through props.
* Angular components are split into MVC files that also deal with data passed to them.

---

## Installation

Installation:
* npm init  
* npm i react@15.5.4 react-dom@15.5.4 --save  
* npm i webpack@3.4.0 --save-dev  
* npm i webpack@3.4.0 -g  
* npm i babel-core@6.24.1 babel-loader@7.0.0 babel-preset-es2015@6.24.1 babel-preset-react@6.24.1 --save-dev
* npm i prop-types@15.5.10 --save
* npm i webpack-dev-server@2.5.0 -g
* npm i webpack-dev-server@2.5.0 --save-dev
* npm i react-hot-loader@3.0.0-beta.7 --save-dev
* npm i html-webpack-plugin@2.29.0 --save-dev
* npm i eslint -g
* npm i eslint-plugin-react -g
* eslint --init
* npm i eslint-loader --save-dev
* npm i --save styled-jsx
* npm i react-router-dom@4.0.0 --save
* npm i url-loader@0.6.2 --sav-dev
* npm i file-loader@1.1.6 --sav-dev

## Notes
I tried starting up my original tap-app angular cli project but was unable to get it started: an error message was telling me that 'ng serve' can only be performed inside an angular cli project. This was after I installed all npm packages, global dependencies, and the angular cli in the home directory. _I need to go back and solidify my understanding of angular project configs._

ListedItem.jsx >> Cannot prop type check the properties of "prop":

> keg.name

...where "keg" is the prop, and "name" is the *property* of "prop".

Styling Links >> had to place their styles in-line, styled-jsx does not work.

Changing styles in the dev console >> doesn't seem to work. This can make tweaking CSS difficult.

Using ID more than once? >> on ListedItems I was able to style with an ID more than once when I probably should have used a class to do this. I'm assuming React's hash-ID system is preventing these from colliding?

## Plans

Apply the background image to Body so it covers the entire window area.
