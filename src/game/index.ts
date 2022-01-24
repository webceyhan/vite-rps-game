import { Status } from './status';
import { Move, randomMove } from './move';
import { COMPUTER, Player, PlayerId, USER } from './player';

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

        // next round if continues
        this.isLastRound || this.round++;

        // set game over if last round
        this.isLastRound && (this.over = true);
    }

    private processRound() {
        // compare moves in behalf of player1
        const { moveStatus, scoreStatus, messagePerRound, messagePerGame } =
            this.player1.compareTo(this.player2);

        // process player scores
        switch (moveStatus) {
            case Status.Won:
                this.player1.score++;
                break;

            case Status.Lost:
                this.player2.score++;
                break;
        }

        // set status message depending on the game state
        const lastRound = this.round === this.roundLimit;
        this.message = lastRound ? messagePerGame : messagePerRound;
    }
}
