import { Status } from './status';
import { Move, compareMoves } from './move';
import { compare } from '../utils';

export class Player {
    constructor(
        public name: string,
        public score: number = 0,
        public move?: Move
    ) {}

    compareTo({ move, score }: Player) {
        return {
            moveStatus: compareMoves(this.move as any, move as any),
            scoreStatus: compare(this.score, score) as Status,
        };
    }
}

export type PlayerId = 'player1' | 'player2';

export const USER = new Player('You');

export const COMPUTER = new Player('Computer');
