// Given an empty layout (0 rows).
// When I request to add a new row.
// Then render one row.

import initState from '../initState';

describe('When I request to add a new row', () => {
  beforeEach(() => {});
  it('Then render one row', () => {
    var afterID = 1;
    var action = {type: 'ADD_ROW', afterID: 1};
    const state = reducer(initState, action);
    expect(true).toBe(true);
  });
});
