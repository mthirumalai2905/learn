// DraggableCodeSnippet.js
import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';

const DraggableCodeSnippet = ({ name, type, children }) => {
  const [{ isDragging }, drag] = useDrag({
    type: type || ItemTypes.ITEM,
    item: { name, type },
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
      }}
    >
      {/* Render the content of the draggable code snippet */}
      {children}
    </div>
  );
};

export default DraggableCodeSnippet;
