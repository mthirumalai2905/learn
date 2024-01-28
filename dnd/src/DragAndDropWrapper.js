import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import DraggableItem from './DraggableItem';
import { ItemTypes } from './ItemTypes';
import { Resizable } from 'react-resizable';
import 'react-resizable/css/styles.css'; // Import the styles for react-resizable

const DragAndDropWrapper = () => {
  const [droppedItems, setDroppedItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const [, drop] = useDrop({
    accept: [ItemTypes.ITEM, ItemTypes.IMAGE], // Allow dropping both ITEM and IMAGE types
    drop: (item) => {
      setDroppedItems((prevItems) => [...prevItems, item]);
    },
  });

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Check if '/' is typed
    if (value.includes('/')) {
      // Implement your dropdown logic here
      console.log('Dropdown options should appear here.');
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <h2>Left Container</h2>
        {/* Input with Drag-and-Drop */}
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
            {/* Add more options as needed */}
          </datalist>
          <div>
            {/* Add image items with the 'IMAGE' type */}
            <DraggableItem name="https://imgs.search.brave.com/gA38Ee7vzlc4DDWTzs08El4nnpoMbUB90kL-3r38Erc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvbHVmZnktcGlj/dHVyZXMtMjJvc2Fq/ajlpdmpmY200OS5q/cGc" type={ItemTypes.IMAGE} />
            <DraggableItem name="https://imgs.search.brave.com/yGFIHPK9yiGsbD48a3P77XLd4WS4DIJ55KCMBsXrRIo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWpwZy5jb20v/cGhvdG8vNjRlZTE3/MGFIUjBjSE02THk5/MGMyVXpMbTF0TG1K/cGJtY3VibVYwTDNS/b1AybGtQVTlKVUM1/WWJHNDRRVWRPUkVs/TlkxUkRUMkZxTlVo/UFYxOW5TR0ZGYnla/d2FXUTlRWEJwLmpw/Zw" type={ItemTypes.IMAGE} />
          </div>
        </div>
      </div>

      {/* Resizable Right Container */}
      <Resizable
        width={300}  // Initial width
        height={500} // Initial height (adjust based on your needs)
      >
        <div
          ref={drop}
          className='result'
          style={{
            border: '2px dashed #ccc',
            padding: '16px',
            overflow: 'auto',
          }}
        >
          <h2>Right Container</h2>
          {/* Display Dropped Items */}
          {droppedItems.map((item, index) => (
            <div key={index} style={{ marginBottom: '8px' }}>
              {item.type === ItemTypes.IMAGE ? (
                <img src={item.name} alt={item.name} style={{ width: '100%', height: 'auto' }} />
              ) : (
                <span>{item.name}</span>
              )}
            </div>
          ))}
        </div>
      </Resizable>
    </div>
  );
};

export default DragAndDropWrapper;
