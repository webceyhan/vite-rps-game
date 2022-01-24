import { random } from '../../utils';
import { Status } from '../status';
import { RULES } from './rules';
import { Move, MOVES } from './moves';

export * from './moves';

// helpers
export const randomMove = () => MOVES[random(MOVES.length)];

export const compareMoves = (a: Move, b: Move) => RULES[a][b] || Status.Even;
