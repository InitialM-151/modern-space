export default function Label({ value, children, ...props }) {
  return (
    <label className='text-slate-500 mb-3 block' {...props}>
      {value || children}
    </label>
  );
}
