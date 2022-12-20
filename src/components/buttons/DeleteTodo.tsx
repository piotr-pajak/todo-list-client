import { ReactComponent as TrashIcon } from "../../assets/icons/trash.svg";

const DeleteTodo = () => {
  return (
    <button className="p-1 text-gray-400 duration-150 hover:text-gray-300">
      <TrashIcon />
    </button>
  );
};

export default DeleteTodo;
