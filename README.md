# Tetris - React/Redux

An implementation of Tetris with React and Redux.

## About Tetris

Tetris is an arcade game that came out in the mid '80s.

It is played on a grid with the goal if fitting blocks
together to form whole rows.

- https://en.wikipedia.org/wiki/Tetris

## Getting started

Download or clone this repo. Then run:

`npm install`

Then run the project with:

`npm start`

## Game Mechanic

This version of Tetris uses Redux to manage application state.
The current state of the game is stored in the Redux store.

The main grid is stored as a two dimensional array with block
shapes are mapped to a series two dimensional arrays that
represent the shape of each piece at each of it's rotations.

## Built with

The project was started with `create-react-app`.

For more information see the Create React App Readme [here](README-react.md).
