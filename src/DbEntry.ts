class DbEntry {
    #data;
    constructor() {
        this.#data = new Map();
    }

    get(key: string) {
        return this.#data.get(key);
    }

    has(key: string) {
        return this.#data.has(key);
    }

    *keys() {
        yield* this.#data.keys();
    }

    *values() {
        yield* this.#data.values();
    }

    *entries() {
        yield* this.#data.entries();
    }

    *[Symbol.iterator]() {
        yield* this.#data[Symbol.iterator]();
    }

}

export default DbEntry;
