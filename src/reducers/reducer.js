import { List } from 'immutable';

export default function reducer(state, action) {
  if (action.type === 'ADD_ROW') {
    const id = Math.max(0, ...state.map(o => o.id));
    var row = { id: 1, order: 1 };
    const rows = List(state.rows).splice(action.afterID + 1, 0, row);
    const newState = { ...state, rows };
    return newState;
  }

  return state;
}
