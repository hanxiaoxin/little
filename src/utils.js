export class LittlePlayerError extends Error {
    constructor(message) {
        super(message);
        this.name = 'LittlePlayerError';
    }
}

export function errorHandle(condition, msg) {
    if (!condition) {
        throw new LittlePlayerError(msg);
    }
    return condition;
}
