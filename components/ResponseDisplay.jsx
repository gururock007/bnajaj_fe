import React from 'react';

const ResponseDisplay = ({ response, selectedOptions }) => {
  if (!response) return null;

  const {
    is_success = false,
    user_id = '',
    email = '',
    roll_number = '',
    alphabets = [],
    numbers = [],
    highest_lowercase_alphabet = []
  } = response;

  const renderData = () => {
    let result = [];

    if (selectedOptions.includes('Alphabets')) {
      result.push(
        <div key="alphabets">
          <strong>Alphabets:</strong> {alphabets.length ? alphabets.join(', ') : 'None'}
        </div>
      );
    }

    if (selectedOptions.includes('Numbers')) {
      result.push(
        <div key="numbers">
          <strong>Numbers:</strong> {numbers.length ? numbers.join(', ') : 'None'}
        </div>
      );
    }

    if (selectedOptions.includes('Highest lowercase alphabet')) {
      result.push(
        <div key="highest">
          <strong>Highest lowercase alphabet:</strong> {highest_lowercase_alphabet.length ? highest_lowercase_alphabet.join(', ') : 'None'}
        </div>
      );
    }

    return result.length ? result : <p>No data to display based on selected options.</p>;
  };

  return (
    <div className="response-display">
      <h3>Response Data:</h3>
      <div>
        <strong>Success:</strong> {is_success ? 'True' : 'False'}
      </div>
      <div>
        <strong>User ID:</strong> {user_id}
      </div>
      <div>
        <strong>Email:</strong> {email}
      </div>
      <div>
        <strong>Roll Number:</strong> {roll_number}
      </div>
      {renderData()}
    </div>
  );
};

export default ResponseDisplay;
