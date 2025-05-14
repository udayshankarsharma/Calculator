import styles from './ButtonsContainer.module.css';
const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = ["C", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "9", "0", ".", "="];

  return (
    <div className="grid grid-cols-4 gap-2">
      {buttonNames.map((buttonName, index) => (
        <button
          key={index}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={() => onButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;