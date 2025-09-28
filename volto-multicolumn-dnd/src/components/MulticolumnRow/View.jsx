import React from 'react';
import { useSelector } from 'react-redux';
import './style.css';

const COLUMN_COUNT = 3;

const MulticolumnRowView = ({ block }) => {
  const columns = useSelector(
    (state) => state.multicolumn[block]?.columns || Array.from({ length: COLUMN_COUNT }, () => [])
  );

  return (
    <div className="multicolumn-row-view">
      {columns.map((blocks, colIdx) => (
        <div className="multicolumn-column-view" key={colIdx}>
          {blocks.map((blockId) => (
            <div className="multicolumn-block-view" key={blockId}>
              {blockId}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MulticolumnRowView;
