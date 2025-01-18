import DbEntry from "./DbEntry";

class Database implements iDatabase {
    #data: Map<string, DbEntry>;

    constructor() {
        this.#data = new Map<string, DbEntry>();
    }

    set(id: string, key: string, val: string): void {
        if (!this.#data.has(id)) {
            this.#data.set(id, new DbEntry());
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

    getAllSorted(id: string): string {
        if (!this.#data.has(id)) {
            return '';
        }

        const sortedArr = Array.from([...this.#data.get(id)?.entries()].sort());

        return sortedArr.map(entry => `"${entry[0]}":"${entry[1]}"`).join(',');
    }

    getAllFiltered(id: string, prefix: string): string {
        return '';
    }
}

export default Database;
