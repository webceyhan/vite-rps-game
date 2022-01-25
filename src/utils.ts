export const random = (limit: number) => Math.floor(Math.random() * limit);

export const compare = (a: number, b: number) => (a > b ? 1 : a < b ? -1 : 0);

export const delay = (fn: Function, ms = 1000) => setTimeout(fn, ms);

export const delayAsync = async (ms = 1000) => {
    return new Promise((resolve) => delay(resolve, ms));
};

export const rootUrl = (path: string) =>
    new URL(`/src/${path}`, import.meta.url).toString();
