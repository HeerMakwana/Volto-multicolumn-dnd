import React from 'react';
import { useDrag } from 'react-dnd';

const DndBlock = ({ blockId, position, rowBlock }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'BLOCK',
    item: { blockId, position, rowBlock },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className="dnd-block"
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        background: '#fff',
        border: '1px solid #ddd',
        borderRadius: 4,
        marginBottom: 8,
        padding: 8,
      }}
      tabIndex={0}
      aria-grabbed={isDragging}
    >
      {blockId}
    </div>
  );
};

export default DndBlock;
