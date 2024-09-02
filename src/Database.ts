class Database implements iDatabase {

    data;

    constructor() {
        this.data = {};
    }

    set(id: string, key: string, val: string) {
        throw new Error('Not implemented');
    }

    get(id: string, key: string) {
        throw new Error('Not implemented');
        return '';
    }

    delete(id: string, key: string) {
        throw new Error('Not implemented');
    }
}

export default Database;
