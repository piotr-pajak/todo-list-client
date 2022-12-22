import { CheckMediumIcon, EditIcon } from "../../assets/icons";
import React from "react";


const EditTodoButton = ({ handleEditTodo, editState, setEditState  }) => {

  return (
    <>
      {editState ?
      (
        <button
          onClick={handleEditTodo}
          className="p-1 text-gray-400 duration-150 hover:text-gray-300"
        >
          <CheckMediumIcon />
        </button>
      )
      :
      (
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
