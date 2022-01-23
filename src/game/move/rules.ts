import { Status } from '../status';
import { Move, ROCK, SCISSOR, PAPER } from './moves';

type MoveRule = {
    [key in Move]?: Status;
};

type MoveRules = {
    [key in Move]: MoveRule;
};

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
