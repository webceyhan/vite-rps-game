import { random } from '../utils';
import { Status } from './status';

// constants
export const ROCK = 'rock';
export const SCISSOR = 'scissor';
export const PAPER = 'paper';

// types
export type Move = typeof ROCK | typeof SCISSOR | typeof PAPER;

type MoveRule = {
    [key in Move]?: Status;
};

type MoveRules = {
    [key in Move]: MoveRule;
};

// constant map
export const MOVES: Move[] = [ROCK, SCISSOR, PAPER];

// rock -> scissor -> paper
export const RULES: MoveRules = {
    [ROCK]: {
        [SCISSOR]: Status.Won,
        [PAPER]: Status.Lost,
    },

    [SCISSOR]: {
        [PAPER]: Status.Won,
        [ROCK]: Status.Lost,
    },

    [PAPER]: {
        [ROCK]: Status.Won,
        [SCISSOR]: Status.Lost,
    },
};

// helpers
export const randomMove = () => MOVES[random(MOVES.length)];

export const compareMoves = (a: Move, b: Move) => RULES[a][b] || Status.Even;
