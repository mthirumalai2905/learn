// MyMarkdownComponent.js
import React from 'react';
import ReactMarkdown from 'react-markdown';
import DragAndDropWrapper from './DragAndDropWrapper';

const MyMarkdownComponent = ({ markdownContent }) => {
  return (
    <DragAndDropWrapper>
      <div>
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    </DragAndDropWrapper>
  );
};

export default MyMarkdownComponent;
