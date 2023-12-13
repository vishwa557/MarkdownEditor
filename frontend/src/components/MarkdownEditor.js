import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../styles/MarkdownEditor.css'; // Import your CSS file

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('');
  const [html, setHtml] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      convertMarkdown();
    }, 500);
    return () => clearTimeout(timer);
  }, [markdown]);

  const convertMarkdown = () => {
    axios.post('http://localhost:5000/api/convert', { markdown })
      .then(response => {
        setHtml(response.data.html);
      })
      .catch(error => {
        console.error('Error converting Markdown:', error);
      });
  };

  const handleInputChange = (event) => {
    setMarkdown(event.target.value);
  };

  const clearTextarea = () => {
    setMarkdown('');
  };

  return (
    <div className="markdown-editor-container">
      
      <div className="textarea-container">
        <div className="textarea-header">
          <button className="clear-button" onClick={clearTextarea}>
            Clear
          </button>
        </div>
        <textarea
          value={markdown}
          onChange={handleInputChange}
          placeholder="Type your Markdown here..."
          className="markdown-textarea"
        />
      </div>
      <div
        className="output-container"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

export default MarkdownEditor;

