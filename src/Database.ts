class Database implements iDatabase {
    #data: Map<string, Map<string, string>>;

    constructor() {
        this.#data = new Map<string, Map<string, string>>();
    }

    set(id: string, key: string, val: string): void {
        if (!this.#data.has(key)) {
            this.#data.set(id, new Map([[key, val]]));
        }
        this.#data.get(id)?.set(key, val);
    }

    get(id: string, key: string): string {
        const returnVal = this.#data.get(id)?.get(key);
        return returnVal ? returnVal : '';
    }

    delete(id: string, key: string): void {
        const delEntry = this.#data.get(id);
        delEntry?.delete(key);
    }
}

export default Database;
