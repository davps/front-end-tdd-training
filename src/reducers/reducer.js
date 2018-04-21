import { List } from 'immutable';

function reducerRows(state, action) {
  if (action.type === 'ADD_ROW') {
    if (typeof action.afterID !== 'number') {
      throw new Error('afterID must be numeric');
    }

    if (!state.find(o => o.id === action.afterID) && action.afterID === -1) {
      throw new Error('afterID not valid');
    }

    if (state.rows !== null) {
    }

    const id = Math.max(-1, ...state.rows.map(o => o.id)) + 1;
    var row = { id, order: 1 };
    const rows = List(state.rows)
      .splice(action.afterID + 1, 0, row)
      .map((o, order) => ({ ...o, order }))
      .toArray();
    const newState = { ...state, rows };
    return newState;
  }
    
}
export default function reducer(state, action) {
  var rows = reducerRows(state.rows, action);
  return {...state, rows};
}
