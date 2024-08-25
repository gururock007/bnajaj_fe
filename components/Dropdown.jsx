import React from 'react';

const Dropdown = ({ setSelectedOptions }) => {
  const options = ['Alphabets', 'Numbers', 'Highest lowercase alphabet'];

  const handleChange = (e) => {
    const selected = Array.from(e.target.selectedOptions, option => option.value);
    setSelectedOptions(selected);
  };

  return (
    <select multiple onChange={handleChange}>
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
