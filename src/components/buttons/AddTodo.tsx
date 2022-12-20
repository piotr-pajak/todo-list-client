import { ReactComponent as AddIcon } from "../../assets/icons/add.svg";

const AddTodo = () => {
  return (
    <button className="ml-4 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-400 text-white duration-150 hover:border-gray-100">
      <span>
        <AddIcon className="m-4" />
      </span>
    </button>
  );
};
export default AddTodo;
