import { CheckMediumIcon, EditIcon } from "../../assets/icons/index.js";
import { EditTodoButtonProps } from "../../../custom";

const EditTodoButton = ({
  handleEditTodo,
  editState,
  setEditState,
}: EditTodoButtonProps) => {
  return (
    <>
      {editState ? (
        <button
          onClick={handleEditTodo}
          className="p-1 text-gray-400 duration-150 hover:text-gray-300"
        >
          <CheckMediumIcon />
        </button>
      ) : (
        <button
          onClick={() => setEditState(!editState)}
          className="p-1 text-gray-400 duration-150 hover:text-gray-300"
        >
          <EditIcon />
        </button>
      )}
    </>
  );
};

export default EditTodoButton;
