import { describe, expect, test, beforeEach } from '@jest/globals';
import Database from './Database';

describe('Database', () => {
    let db: Database;

    beforeEach(() => {
        db = new Database();
    });

    test('No data exists', () => {
        expect(db.get('lkj', 'lse')).toBeNull();
    });
});
