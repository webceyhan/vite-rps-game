import { Status } from './status';
import { Move, compareMoves } from './moves';
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

    reset() {
        this.score = 0;
        this.move = null as any;
    }
}

export type PlayerId = 'player1' | 'player2';

export const USER = new Player('You');

export const COMPUTER = new Player('Computer');
