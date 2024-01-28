// App.js
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragAndDropWrapper from './DragAndDropWrapper';

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <DragAndDropWrapper />
    </DndProvider>
  );
};

export default App;
