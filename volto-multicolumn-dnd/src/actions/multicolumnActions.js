export const MOVE_BLOCK = 'MULTICOLUMN/MOVE_BLOCK';

export function moveBlock({ blockId, from, to, rowBlock }) {
  return {
    type: MOVE_BLOCK,
    payload: { blockId, from, to, rowBlock },
  };
}
