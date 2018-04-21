import { List } from 'immutable';

export default function reducer(state, action) {
  if (action.type === 'ADD_ROW') {
    var row = { id: 1, order: 1 };
    List(state.rows).splice(action.afterID + 1, 0, row);
  }

  return state;
}
