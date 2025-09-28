import reducer from '../reducers/multicolumnReducer';
import { moveBlock } from '../actions/multicolumnActions';

describe('multicolumnReducer', () => {
  it('should move a block between columns', () => {
    const initialState = {
      row1: {
        columns: [['block1'], ['block2'], []],
      },
    };
    const action = moveBlock({
      blockId: 'block1',
      from: { column: 0, index: 0 },
      to: { column: 1, index: 1 },
      rowBlock: 'row1',
    });
    const state = reducer(initialState, action);
    expect(state.row1.columns).toEqual([[], ['block2', 'block1'], []]);
  });
});
