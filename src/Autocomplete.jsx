import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Autocomplete = () => {
  const [userInput, setUserInput] = useState('');
  const [suggestedCode, setSuggestedCode] = useState('');

  useEffect(() => {
    if (userInput) {
      // Call the API to get code suggestions
      axios.post('/api/get-code-suggestions', { userInput })
        .then((response) => {
          setSuggestedCode(response.data.suggestedCode);
        })
        .catch((error) => {
          console.error('Error fetching code suggestions:', error);
        });
    } else {
      setSuggestedCode('');
    }
  }, [userInput]);

  return (
    <div>
      <textarea
        placeholder="Start typing your code..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <div>
        <strong>Suggested Code:</strong>
        <pre>{suggestedCode}</pre>
      </div>
    </div>
  );
};

export default Autocomplete;
