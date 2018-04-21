import { List } from 'immutable';

export default function reducer(state, action) {
  if (action.type === 'ADD_ROW') {
    const id = Math.max(0, ...state.map(o => o.id)) + 1;
    var row = { id, order: 1 };
    const rows = List(state.rows)
        .splice(action.afterID + 1, 0, row)
        .map((o, order)=>({...o, order}));
    const newState = { ...state, rows };
    return newState;
  }

  return state;
}
