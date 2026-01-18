import React from 'react';

const OTPInput = ({ value, onChange, length = 6 }) => {
  const handleChange = (e) => {
    const val = e.target.value.replace(/\D/g, '');
    if (val.length <= length) {
      onChange(val);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        maxLength={length}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-center text-2xl tracking-widest focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
        placeholder="000000"
      />
    </div>
  );
};

export default OTPInput;