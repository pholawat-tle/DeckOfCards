# Object-Oriented Deck of Cards

A Deck of Cards written in TypeScript using Object-Oriented Programming Concept

## Card Class

An object of this class is a representation of a playing card and has the following characteristics:

- Each card has two attributes: Suit and Rank
- The value of the card can be determined by its suit and rank, and compared using the utility functions `isMoreThan()` or `isLessThan()`
  - The compare functions takes in 1 parameter, which is any card, to compare the value of the instance that calls the function and the instance in the paramerter
  - The compare functions will return a boolean according to the value of the two cards

## Deck Class

An object of this class resembles a deck of playing cards and has the following characteristics:

- The constructor takes in an optional parameter `cardArr`, which is an array of Card Object
  - If `cardArr` is not specified, the created object will be a deck of 52 cards
  - If `cardArr` is specified, the array will be converted into a Deck Object
- Each Deck has these functions:
  - `getDeck()` : Returns `cardArr`
  - `sortDeck()` : Sort the deck (in-place)
  - `shuffle()` : Shuffle the deck (in-place)
  - `draw()` : Remove a card from the end of the array and returns it
