import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";
import { ReactComponent as CheckLargeIcon } from "../../assets/icons/check-md.svg";

const EditTodo = ({ ...props }) => {
  const { handleEditTodo, editState, setEditState } = props;

  return (
    <>
      {editState ? (
        <button
          onClick={handleEditTodo}
          className="p-1 text-gray-400 duration-150 hover:text-gray-300"
        >
          <CheckLargeIcon />
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

export default EditTodo;
