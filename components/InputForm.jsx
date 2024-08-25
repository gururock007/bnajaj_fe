import React, { useState } from 'react';
import axios from 'axios';

const InputForm = ({ setResponse }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const jsonInput = JSON.parse(input);
      const response = await axios.post('http://127.0.0.1:5000/bfhl', jsonInput); // Replace with your backend URL
      setResponse(response.data);
      setError(null);
    } catch (err) {
      setError('Invalid JSON or API Error');
    }
  };

  return (
    <div className=' container '>
        <form onSubmit={handleSubmit} className='grid'>
          <div className='col-span-6 font-black '>
              <textarea
                className = ''
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Enter JSON input'
              />
          </div>
          <button type="submit" className=' col-span-2 '>Submit</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    </div>
  );
};

export default InputForm;
