import { Status } from './status';
import { Move, randomMove } from './moves';
import { Player, PlayerId, USER, COMPUTER } from './player';
import { getRoundMessage, getGameMessage, INITIAL_MESSAGE } from './messages';

export * from './moves';
export * from './player';
export * from './messages';

// GAME STATES
// - ready (initial state)
// - started
// - done

export class Game {
    round = 0; // ready;
    roundLimit = 10;
    message = INITIAL_MESSAGE;
    player1: Player = USER;
    player2: Player = COMPUTER;

    get over() {
        return this.round != 0 && this.round > this.roundLimit;
    }

    get isLastRound() {
        return this.round === this.roundLimit;
    }

    get progress() {
        return (100 / this.roundLimit) * this.round;
    }

    start() {
        // init state
        this.round = 1;
        this.player1.reset();
        this.player2.reset();
        this.message = INITIAL_MESSAGE;
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

        this.round++; // continue
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
            ? getGameMessage(scoreStatus)
            : getRoundMessage(moveStatus);
    }
}
