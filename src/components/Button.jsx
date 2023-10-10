import clsx from 'clsx';

clsx;

export default function Button(props) {
  const { className = 'bg-blue-500', children, text } = props;

  return (
    <button {...props} className={clsx(className, '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2 rounded text-white px-5 py-2')}>
      {text || children}
    </button>
  );
}
