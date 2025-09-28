import update from 'immutability-helper';
import { MOVE_BLOCK } from '../actions/multicolumnActions';

const initialState = {};

function removeBlockFromColumns(columns, blockId) {
  return columns.map((col) => col.filter((id) => id !== blockId));
}

function insertBlockToColumn(columns, blockId, to) {
  const { column, index } = to;
  const col = columns[column] || [];
  const insertAt = index !== null ? index : col.length;
  const newCol = [...col.slice(0, insertAt), blockId, ...col.slice(insertAt)];
  return columns.map((c, idx) => (idx === column ? newCol : c));
}

export default function multicolumnReducer(state = initialState, action) {
  switch (action.type) {
    case MOVE_BLOCK: {
      const { blockId, from, to, rowBlock } = action.payload;
      const columns = state[rowBlock]?.columns || [[], [], []];
      let newColumns = removeBlockFromColumns(columns, blockId);
      newColumns = insertBlockToColumn(newColumns, blockId, to);
      return {
        ...state,
        [rowBlock]: {
          ...state[rowBlock],
          columns: newColumns,
        },
      };
    }
    default:
      return state;
  }
}
