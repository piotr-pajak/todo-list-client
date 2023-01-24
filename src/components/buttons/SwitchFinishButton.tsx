import { CheckSmallIcon } from "../../assets/icons/index.js";
import { toggleFinishedValue } from "../../../api/api";
import { buttonPropsType } from "../../../custom";

const SwitchFinishButton = ({ id, finished, setTodos }: buttonPropsType) => {
  const handleToggleFinishedValue = () => {
    toggleFinishedValue(id, !finished);
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) return { ...todo, finished: !finished };
        return todo;
      })
    );
  };

  return (
    <button
      onClick={handleToggleFinishedValue}
      className={`ml-4 flex h-8 w-8 items-center justify-center rounded-full border-2 text-white duration-150 ${
        finished
          ? "border-green-700 bg-green-700 hover:border-green-600 hover:bg-green-600"
          : "border-gray-400 hover:border-gray-100"
      }`}
    >
      <span className="m-4">{finished ? <CheckSmallIcon /> : ""}</span>
    </button>
  );
};

export default SwitchFinishButton;
