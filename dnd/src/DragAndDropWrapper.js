import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import DraggableItem from './DraggableItem';
import DraggableText from './DraggableText';
import DraggableCodeSnippet from './DraggableCodeSnippet';
import { ItemTypes } from './ItemTypes';
import { Resizable } from 'react-resizable';
import 'react-resizable/css/styles.css';

const DragAndDropWrapper = () => {
  const [droppedItems, setDroppedItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const [, drop] = useDrop({
    accept: [ItemTypes.ITEM, ItemTypes.IMAGE, ItemTypes.TEXT, ItemTypes.CODE_SNIPPET],
    drop: (item) => {
      setDroppedItems((prevItems) => [...prevItems, item]);
    },
  });

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.includes('/')) {
      console.log('Dropdown options should appear here.');
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: 1 }}>
        <h2>Left Container</h2>
        <div>
          <input
            type='text'
            value={inputValue}
            onChange={handleInputChange}
            placeholder='Type here...'
            list='options'
          />
          <datalist id='options'>
            <option value='/text'>Text</option>
            <option value='/image'>Image</option>
            <option value='/code'>Code</option>
          </datalist>
          <div>
            <DraggableItem name="https://imgs.search.brave.com/gA38Ee7vzlc4DDWTzs08El4nnpoMbUB90kL-3r38Erc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvbHVmZnktcGlj/dHVyZXMtMjJvc2Fq/ajlpdmpmY200OS5q/cGc" type={ItemTypes.IMAGE} />
            <DraggableItem name="https://imgs.search.brave.com/yGFIHPK9yiGsbD48a3P77XLd4WS4DIJ55KCMBsXrRIo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWpwZy5jb20v/cGhvdG8vNjRlZTE3/MGFIUjBjSE02THk5/MGMyVXpMbTF0TG1K/cGJtY3VibVYwTDNS/b1AybGtQVTlKVUM1/WWJHNDRRVWRPUkVs/TlkxUkRUMkZxTlVo/UFYxOW5TR0ZGYnla/d2FXUTlRWEJwLmpw/Zw" type={ItemTypes.IMAGE} />
            <DraggableText name="Item 1" type={ItemTypes.TEXT} />
            <DraggableText name="Item 2" type={ItemTypes.TEXT} />
            <DraggableText name="Item 3" type={ItemTypes.TEXT} />
            <DraggableCodeSnippet name="Your Code Snippet" type={ItemTypes.CODE_SNIPPET}>
              {/* Your code snippet content goes here */}
              console.log("Hello, World!");
            </DraggableCodeSnippet>
          </div>
        </div>
      </div>

      {/* Make the right container resizable */}
      <Resizable
        style={{ flex: 2 }}
        minConstraints={[200, 200]}
        maxConstraints={[800, window.innerHeight - 100]}
      >
        <div
          ref={drop}
          className='result resizable'
          style={{
            border: '2px dashed #ccc',
            padding: '16px',
            overflow: 'auto',
            width: '100%',
            height: '100%',
          }}
        >
          <h2>Right Container</h2>
          {droppedItems.map((item, index) => (
            <div key={index} style={{ marginBottom: '8px' }}>
              {renderItem(item)}
            </div>
          ))}
        </div>
      </Resizable>
    </div>
  );
};

const renderItem = (item) => {
  if (item.type === ItemTypes.IMAGE) {
    return <img src={item.name} alt={item.name} style={{ width: '100%', height: 'auto' }} />;
  } else if (item.type === ItemTypes.TEXT) {
    return <span>{item.name}</span>;
  } else if (item.type === ItemTypes.CODE_SNIPPET) {
    return (
      <div
        style={{
          background: '#f0f0f0', // Set the background color for code snippets
          padding: '10px',
          borderRadius: '5px',
        }}
      >
        <pre>{item.name}</pre>
      </div>
    );
  }
  // Add more conditions based on your item types

  return null;
};

export default DragAndDropWrapper;
