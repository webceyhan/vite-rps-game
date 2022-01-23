import { Status } from './status';
import { Move, randomMove } from './move';
import { COMPUTER, Player, PlayerId, USER } from './player';
import { ROUND_MESSAGES, SCORE_MESSAGES } from './messages';

export * from './move';

export class Game {
    round = 1;
    roundLimit = 5;
    message = 'start playing..';
    player1: Player = USER;
    player2: Player = COMPUTER;

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
        const roundStatus = this.player1.compareMoveTo(this.player2);

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
            const scoreStatus = this.player1.compareScoreTo(this.player2);

            this.message = SCORE_MESSAGES[scoreStatus];
        }
    }
}
