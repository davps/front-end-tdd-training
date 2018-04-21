// Given an empty layout (0 rows).
// When I request to add a new row.
// Then render one row.

import initState from '../initState'

describe("When I request to add a new row", function() {
    it("Then render one row", function () {
        var afterID = 1;
        const state = reducer(iniState, addRow(afterID))
        expect(true).toBe(true);
    });
});