import { AddIcon } from "../../assets/icons/index.js";

const CreateTodoButton = ({ handleCreateToDo }) => {
  return (
    <button
      onClick={handleCreateToDo}
      className="ml-4 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-400 text-white duration-150 hover:border-gray-100"
    >
      <span className="m-4">
        <AddIcon />
      </span>
    </button>
  );
};
export default CreateTodoButton;
