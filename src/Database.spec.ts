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

    test('Get db entries sorted', () => {
        const idA = '14moRX';
        const nameA = 'John';
        const colorA = 'turquoise';
        const idB = 'deinT3';
        const nameB = 'harry';
        const colorB = 'green';
        const keyName = 'name';
        const keyColor = 'color';

        db.set(idA, keyColor, colorA);
        db.set(idA, keyName, nameA);

        db.set(idB, keyColor, colorB);
        db.set(idB, keyName, nameB);

        expect(db.getAllSorted(idA)).toEqual(`{"color":"${colorA}","name":"${nameA}"}`);
        expect(db.getAllSorted(idB)).toEqual(`{"color":"${colorB}","name":"${nameB}"}`);
    })
});
