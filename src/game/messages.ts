import { Status, STATUS_COLORS } from './status';

export type Message = {
    text: string;
    color: string;
};

const ROUND_MESSAGES = {
    [Status.Won]: 'You won!',
    [Status.Even]: "It's a tie!",
    [Status.Lost]: 'Computer won!',
};

const GAME_MESSAGES = {
    [Status.Won]: 'Congratulations, You beat the computer!',
    [Status.Even]: 'It is a tie. No one won this time!',
    [Status.Lost]: 'Unfortunately, You lost to the computer!',
};

export const INITIAL_MESSAGE: Message = {
    text: 'start playing...',
    color: 'text-secondary',
};

export const getRoundMessage = (status: Status): Message => ({
    text: ROUND_MESSAGES[status],
    color: `text-${STATUS_COLORS[status]}`,
});

export const getGameMessage = (status: Status): Message => ({
    text: GAME_MESSAGES[status],
    color: `text-${STATUS_COLORS[status]}`,
});
