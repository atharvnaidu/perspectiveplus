import React, { useState } from 'react';
import { checkSubtitle } from './api';  // Ensure this imports your API function

const SubtitleLengthChecker = () => {
  const [subtitle, setSubtitle] = useState('');
  const [length, setLength] = useState(null);

  const handleSubmit = async () => {
    const result = await checkSubtitle(subtitle);
    setLength(result.length);  // Ensure 'length' is available in the result
  };

  return (
    <div className="container">
      <h1>Subtitle Length Checker</h1>
      <input
        type="text"
        value={subtitle}
        onChange={(e) => setSubtitle(e.target.value)}
        placeholder="Enter subtitle"
      />
      <button onClick={handleSubmit}>Check Length</button>

      <div className="result">
        {length !== null ? (
          <p>Length: {length} characters</p>
        ) : (
          <p>Enter a subtitle and click "Check Length"</p>
        )}
      </div>
    </div>
  );
};

export default SubtitleLengthChecker;
