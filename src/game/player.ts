import { Status } from './status';
import { Move, compareMoves } from './move';
import { compare } from './util';
import { ROUND_MESSAGES, SCORE_MESSAGES } from './messages';

export class Player {
    constructor(
        public name: string,
        public score: number = 0,
        public move?: Move
    ) {}

    compareTo({ move, score }: Player) {
        const moveStatus = compareMoves(this.move as any, move as any);
        const scoreStatus = compare(this.score, score) as Status;

        return {
            moveStatus,
            scoreStatus,
            messagePerRound: ROUND_MESSAGES[moveStatus],
            messagePerGame: SCORE_MESSAGES[scoreStatus]
        };
    }
}

export type PlayerId = 'player1' | 'player2';

export const USER = new Player('You');

export const COMPUTER = new Player('Computer');
