# Tetris - React/Redux

An implementation of Tetris with React and Redux.

Tetris is an arcade game that came out in the mid '80s.

It is played on a grid with the goal if fitting blocks
together to form whole rows. Read more about it
[here](https://en.wikipedia.org/wiki/Tetris).

## About React/Redux Tetris

This implementation uses React to render the game to the
screen and Redux to manage application state for the game.

Game updates are handled with `requestAnimationFrame`
using delta time to send game updates at precise times.

### Inspiration and Credits

I ran into a version of Tetris created by Franck Marcia
in 2006. I found this and thought I'd make an updated
version. I used Frank's game as a starting point for this
version.

### Expanding on the game

Adding new block shapes is interesting. I added a "C", "+", and a
3x3 with a block in each corner. These make the game more difficult.
Which goes along way to explaining where the original shapes came from.

These new shapes might work better on a larger grid. They may also be
good for making the game more difficult over time.

Including a "bomb" type brick that shows up on occasion and destroys
blocks it comes in contact with could be fun. 

### TODOs

So far this is a work in progress. As is most of the
features work. That said there are still things that
need to be taken care of.

- Add new Game blocks
- Game Over State
  - Needs to display a game over message
  - Restart button needs to display countdown before starting game
- CSS improvements  
  - ~~Use CSS grid for main layout~~
  - Mobile friendly media queries
- Design improvements
  - ~~Blocks could use a beveled edge like the original
  arcade version~~
  - Background and general color improvements.
  - Better typography
- Scoring could use improvements.
  - Extra score for same color for whole row.
- Blocks should start at the very top or move on
to the grid from above.
- keyboard Controls
- Drop button sends block all the way to the bottom (maybe this should be space-bar with down arrow moving blocks down 1 space?)
- Holding down on button applies the action each
frame update
- Shadow below block shows where it will land
- Game should speed up over time with rows completed
or as score increases.
- Levels, as levels are cleared the game should.
offer new levels.
  - All the same brick level.
  - Level begins with grid partially filled with blocks.

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
