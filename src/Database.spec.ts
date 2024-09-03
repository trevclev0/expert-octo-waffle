import { describe, expect, test, beforeEach } from '@jest/globals';
import Database from './Database';

describe('Database', () => {
    let db: Database;

    beforeEach(() => {
        db = new Database();
    });

    test('No data exists', () => {
        const id = '14moRX';
        const key = 'name';
        expect(db.get(id, key)).toEqual('');
    });

    test('Simple set, get, delete', () => {
        const id = '14moRX';
        const key = 'name';
        const val = 'John';

        db.set(id, key, val);

        expect(db.get(id, key)).toEqual(val);

        db.delete(id, key);

        expect(db.get(id, key)).toEqual('');
    });
});
