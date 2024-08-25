import React, { useState } from 'react';
import InputForm from '../components/InputForm';
import Dropdown from '../components/Dropdown';
import ResponseDisplay from '../components/ResponseDisplay';

const App = () => {
  const [response, setResponse] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  return (
    <div className=' container mx-auto text-center my-[20vh]'>
      <h1 className=' text-3xl font-bold p-10'>21BEC1561</h1> {/* Replace with your roll number */}
      <div className=' container'>
        <InputForm setResponse={setResponse} />
        {response && (
          <>
            <Dropdown setSelectedOptions={setSelectedOptions} />
            <ResponseDisplay response={response} selectedOptions={selectedOptions} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
