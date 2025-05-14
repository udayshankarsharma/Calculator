import styles from './Display.module.css';
const Display = ({ displayValue }) => {
  return (
    <>
      <input
        className="w-full bg-gray-200 text-right text-2xl font-mono p-4 rounded mb-4 border border-gray-300 focus:outline-none"
        type="text"
        value={displayValue}
        readOnly
      />
    </>
  );
};
export default Display;