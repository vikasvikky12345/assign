import { useState } from 'react';

const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <div
      className={`w-6 h-6 border-2 rounded-md flex items-center justify-center cursor-pointer ${
        checked ? 'bg-blue-500 border-blue-500' : 'bg-white border-gray-300'
      }`}
      onClick={toggleCheckbox}
    >
      {checked && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      )}
    </div>
  );
};

export default Checkbox;
