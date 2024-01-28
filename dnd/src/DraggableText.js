// DraggableText.js
import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';

const DraggableText = ({ name }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.TEXT,
    item: { name, type: ItemTypes.TEXT },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'grab',
        border: '1px dashed #ccc',
        padding: '8px',
      }}
    >
      {name}
    </div>
  );
};

export default DraggableText;