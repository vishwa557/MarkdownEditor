import React from 'react';

const LivePreview = ({ html }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  );
};

export default LivePreview;
