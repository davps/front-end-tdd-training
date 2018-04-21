// Given an empty layout (0 rows).
// When I request to add a new row.
// Then render one row.

import initState from '../initState';
import reducer from '../reducers/reducer';

describe('When I request to add a new row', () => {
  beforeEach(() => {});
  it('Then we should have one row', () => {
    expect(initState.row).toEqual([]);
    var afterID = 1;
    var action = {type: 'ADD_ROW', afterID: 1};
    const state = reducer(initState, action);
    expect(state).toBeDefined();
    expect(state.rows).toBeDefined();
    expect(state.rows.length).toBe(1);
    expect(state.rows).toEqual([
        {id: 0, order: 0}
    ])
  });
});
