import { Status } from './status';
import { compareMoves, Move, randomMove } from './move';
import { COMPUTER, Player, PlayerId, USER } from './player';
import { ROUND_MESSAGES, SCORE_MESSAGES } from './messages';

export * from './move';

const compareScores = (a: number, b: number) =>
    a > b ? Status.Won : a < b ? Status.Lost : Status.Even;

export class Game {
    round = 1;
    roundLimit = 5;
    message = 'start playing..';
    player1: Player = { ...USER };
    player2: Player = { ...COMPUTER };

    makeMove(playerId: PlayerId, move: Move) {
        this[playerId].move = move;
    }

    playRound(move: Move) {
        // set player moves
        this.makeMove('player1', move);
        this.makeMove('player2', randomMove());

        this.nextRound();
    }

    nextRound() {
        // compare moves in behalf of player1
        const roundStatus = compareMoves(this.player1.move, this.player2.move);

        // process player scores
        switch (roundStatus) {
            case Status.Won:
                this.player1.score++;
                break;

            case Status.Lost:
                this.player2.score++;
                break;
        }

        // set status message
        this.message = ROUND_MESSAGES[roundStatus];

        // increase
        this.round++;

        // finish game if limit reached
        if (this.round > this.roundLimit) {
            const scoreStatus = compareScores(
                this.player1.score,
                this.player2.score
            );

            this.message = SCORE_MESSAGES[scoreStatus];
        }
    }
}
