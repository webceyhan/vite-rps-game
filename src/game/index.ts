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

    makeMove(playerId: PlayerId, move: Move) {
        this[playerId].move = move;
    }

    playRound(move: Move) {
        // set player moves
        this.makeMove('player1', move);
        this.makeMove('player2', randomMove());

        this.processRound();

        // next round
        this.round++;
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
