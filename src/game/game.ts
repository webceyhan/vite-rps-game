import { Status } from './status';
import { Move, randomMove } from './moves';
import { Player, PlayerId, USER, COMPUTER } from './player';
import { getRoundMessage, getGameMessage, INITIAL_MESSAGE } from './messages';
import { delayAsync } from '../utils';

// GAME STATES
// - ready (initial state)
// - started
// - over

export class Game {
    round = 0; // ready;
    roundLimit = 10;
    roundAwaiting = false;
    message = INITIAL_MESSAGE;
    player1: Player = USER;
    player2: Player = COMPUTER;

    get over() {
        return this.round != 0 && this.round > this.roundLimit;
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

    async makeMove(playerId: PlayerId, move: Move) {
        this[playerId].move = move;

        await delayAsync(500);
    }

    async playRound(move: Move) {
        // quit if game over
        if (this.over) return;

        // set round busy flag
        this.roundAwaiting = true;

        // set player moves
        await this.makeMove('player1', move);

        await this.makeMove('player2', randomMove());

        // process round
        await this.processRound();

        // continue
        this.nextRound();

        // finalize if game over
        this.over && this.finalizeGame();
    }

    private async processRound() {
        // compare moves in behalf of player1
        const status = this.player1.compareMoveTo(this.player2);

        // process scores
        switch (status) {
            case Status.Won:
                this.player1.score++;
                break;

            case Status.Lost:
                this.player2.score++;
                break;
        }

        // set round status message
        this.message = getRoundMessage(status);

        await delayAsync();
    }

    private finalizeGame() {
        // compare scores in behalf of player1
        const status = this.player1.compareScoreTo(this.player2);

        // set game status message
        this.message = getGameMessage(status);
    }

    private nextRound() {
        // clear previous round data
        this.player1.move = null as any;
        this.player2.move = null as any;
        this.message = INITIAL_MESSAGE;
        this.roundAwaiting = false;

        this.round++;
    }
}
