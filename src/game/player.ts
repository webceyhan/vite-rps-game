import { Move } from './move';

export type Player = {
    name: string;
    move: Move;
    score: number;
};

export type PlayerId = 'player1' | 'player2';

const initPlayer = (name: string): Player => ({
    name,
    score: 0,
    move: null as any,
});

export const USER: Player = initPlayer('You');

export const COMPUTER: Player = initPlayer('Computer');
