enum Status {
    Won = 1,
    Even = 0,
    Lost = -1,
}

interface RuleMap {
    [key: string]: { [key: string]: Status };
}

const rules: RuleMap = {
    // rock -> scissor -> paper
    rock: { scissor: Status.Won, paper: Status.Lost },
    scissor: { paper: Status.Won, rock: Status.Lost },
    paper: { rock: Status.Won, scissor: Status.Lost },
};

export const moves = Object.keys(rules);

const roundStatusMessages = {
    [Status.Won]: 'You won!',
    [Status.Even]: "It's a tie!",
    [Status.Lost]: 'Computer won!',
};

const gameStatusMessages = {
    [Status.Won]: 'Congratulations, You beat the computer!',
    [Status.Even]: 'It is a tie. No one won this time!',
    [Status.Lost]: 'Unfortunately, You lost to the computer!',
};

const round = (function* () {
    let index = 1;

    // prevent done
    while (true) {
        // reset state
        if (index > 5) index = 1;

        yield index++;
    }
})();

const random = (limit: number) => Math.floor(Math.random() * limit);

const randomMove = () => moves[random(moves.length)];

const compareMoves = (a: string, b: string) => rules[a][b] || Status.Even;

const compareScores = (a: number, b: number) =>
    a > b ? Status.Won : a < b ? Status.Lost : Status.Even;

const getRoundResult = (a: string, b: string) => {
    const status = compareMoves(a, b);
    return { status, message: roundStatusMessages[status] };
};

const getGameResult = (scoreA: number, scoreB: number) => {
    const status = compareScores(scoreA, scoreB);
    return { status, message: gameStatusMessages[status] };
};

export const playRound = (playerMove: string) => {
    // get next round
    const index = round.next().value;

    // get computer move
    const computerMove = randomMove();

    // get round result
    const result = getRoundResult(playerMove, computerMove);

    return {
        index,
        playerMove,
        computerMove,
        ...result,
    };
};
