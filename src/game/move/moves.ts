// constants
export const ROCK = 'rock';
export const SCISSOR = 'scissor';
export const PAPER = 'paper';

// types
export type Move = typeof ROCK | typeof SCISSOR | typeof PAPER;

// constant map
export const MOVES: Move[] = [ROCK, SCISSOR, PAPER];
