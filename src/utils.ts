export const random = (limit: number) => Math.floor(Math.random() * limit);

export const compare = (a: number, b: number) => (a > b ? 1 : a < b ? -1 : 0);

export const rootUrl = (path: string) =>
    new URL(`/src/${path}`, import.meta.url).toString();
