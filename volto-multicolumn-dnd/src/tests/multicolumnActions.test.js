import { moveBlock, MOVE_BLOCK } from '../actions/multicolumnActions';

describe('multicolumnActions', () => {
  it('should create a moveBlock action', () => {
    const payload = {
      blockId: 'block1',
      from: { column: 0, index: 0 },
      to: { column: 1, index: 0 },
      rowBlock: 'row1',
    };
    expect(moveBlock(payload)).toEqual({
      type: MOVE_BLOCK,
      payload,
    });
  });
});
