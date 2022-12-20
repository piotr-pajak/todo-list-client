import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";

const EditTodo = () => {
  return (
    <button className="p-1 text-gray-400 duration-150 hover:text-gray-300">
      <EditIcon />
    </button>
  );
};

export default EditTodo;
