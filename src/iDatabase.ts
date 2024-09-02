interface iDatabase {
    set(id: string, key: string, val: string): void;

    get(id: string, key: string): string;

    delete(id: string, key: string): void;
}
