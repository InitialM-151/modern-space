import { forwardRef, useEffect, useRef } from 'react';

const InputRef = forwardRef(({ type = 'text', ...props }, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className='mb-2 transition duration-300 w-full focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-400 border-slate-300 shadow-sm rounded-lg'
      type={type}
    />
  );
});

const InputFocusEffect = ({ inFocused = false, type = 'text', ...props }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inFocused) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <input
      ref={inputRef}
      {...props}
      className='mb-2 transition duration-300 w-full focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-400 border-slate-300 shadow-sm rounded-lg'
      type={type}
    />
  );
};

function InputStandard({ type = 'text', ...props }) {
  return (
    <input
      {...props}
      className='mb-2 transition duration-300 w-full focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-400 border-slate-300 shadow-sm rounded-lg'
      type={type}
    />
  );
}

export default InputRef;
