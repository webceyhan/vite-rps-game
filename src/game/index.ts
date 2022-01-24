import { Status } from './status';
import { Move, randomMove } from './move';
import { Player, PlayerId, USER, COMPUTER } from './player';
import { GAME_MESSAGES, ROUND_MESSAGES } from './messages';

export * from './move';

export class Game {
    round = 1;
    roundLimit = 5;
    message = 'start playing..';
    player1: Player = USER;
    player2: Player = COMPUTER;
    over = false;

    get isLastRound() {
        return this.round === this.roundLimit;
    }

    makeMove(playerId: PlayerId, move: Move) {
        this[playerId].move = move;
    }

    playRound(move: Move) {
        // quit if game over
        if (this.over) return;

        // set player moves
        this.makeMove('player1', move);
        this.makeMove('player2', randomMove());

        this.processRound();
        this.nextRound();
    }

    private nextRound() {
        if (this.isLastRound) {
            this.over = true; // game over
        } else {
            this.round++; // continue
        }
    }

    private processRound() {
        // compare moves in behalf of player1
        const { moveStatus, scoreStatus } = this.player1.compareTo(
            this.player2
        );

        // process player scores
        switch (moveStatus) {
            case Status.Won:
                this.player1.score++;
                break;

            case Status.Lost:
                this.player2.score++;
                break;
        }

        // set status message
        this.message = this.isLastRound
            ? GAME_MESSAGES[scoreStatus]
            : ROUND_MESSAGES[moveStatus];
    }
}
