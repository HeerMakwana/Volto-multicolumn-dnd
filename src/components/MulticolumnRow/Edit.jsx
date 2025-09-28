import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import { moveBlock } from '../../actions/multicolumnActions';
import DndBlock from '../../utils/dndHelpers';
import './style.css';

const COLUMN_COUNT = 3;

const MulticolumnRowEdit = ({ block }) => {
  const dispatch = useDispatch();
  const columns = useSelector(
    (state) => state.multicolumn[block]?.columns || Array.from({ length: COLUMN_COUNT }, () => [])
  );

  const handleDrop = (item, colIdx) => {
    if (item.position.column === colIdx) return;
    dispatch(
      moveBlock({
        blockId: item.blockId,
        from: item.position,
        to: { column: colIdx, index: null },
        rowBlock: block,
      }),
    );
  };

  return (
    <div className="multicolumn-row-edit">
      {columns.map((blocks, colIdx) => (
        <ColumnDropZone
          key={colIdx}
          colIdx={colIdx}
          blocks={blocks}
          onDrop={handleDrop}
          rowBlock={block}
        />
      ))}
    </div>
  );
};

const ColumnDropZone = ({ colIdx, blocks, onDrop, rowBlock }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: 'BLOCK',
    drop: (item, monitor) => {
      if (monitor.didDrop()) return;
      onDrop(item, colIdx);
    },
    canDrop: (item) => item.position.column !== colIdx,
    collect: (monitor) => ({
      isOver: monitor.isOver({ shallow: true }),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <div
      ref={drop}
      className={`multicolumn-column-edit${isOver && canDrop ? ' highlight' : ''}`}
      tabIndex={0}
      aria-label={`Column ${colIdx + 1} drop zone`}
    >
      {blocks.length === 0 && isOver && canDrop && (
        <div className="placeholder">Drop here</div>
      )}
      {blocks.map((blockId, idx) => (
        <DndBlock
          key={blockId}
          blockId={blockId}
          position={{ column: colIdx, index: idx }}
          rowBlock={rowBlock}
        />
      ))}
    </div>
  );
};

export default MulticolumnRowEdit;
