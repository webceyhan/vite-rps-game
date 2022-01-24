import { Status } from './status';

export const ROUND_MESSAGES = {
    [Status.Won]: 'You won!',
    [Status.Even]: "It's a tie!",
    [Status.Lost]: 'Computer won!',
};

export const GAME_MESSAGES = {
    [Status.Won]: 'Congratulations, You beat the computer!',
    [Status.Even]: 'It is a tie. No one won this time!',
    [Status.Lost]: 'Unfortunately, You lost to the computer!',
};
