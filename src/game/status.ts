export enum Status {
    Won = 1,
    Even = 0,
    Lost = -1,
}

export const STATUS_COLORS = {
    [Status.Lost]: 'danger',
    [Status.Even]: 'warning',
    [Status.Won]: 'success',
};
