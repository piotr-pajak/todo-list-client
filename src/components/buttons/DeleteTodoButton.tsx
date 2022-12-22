import { TrashIcon } from "../../assets/icons/index.js";
import { deleteToDo } from "../../../api/api";
import React, { SetStateAction } from "react";

type deleteToDoProps = {
  id: number;
  setTodos: React.Dispatch<SetStateAction<{id: number, todo: string, finished: boolean}[]>>
};

const DeleteTodoButton = ({ id, setTodos }: deleteToDoProps) => {
  const handleDeleteToDo = async () => {
    await deleteToDo(id);
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  };

  return (
    <button
      onClick={handleDeleteToDo}
      className="p-1 text-gray-400 duration-150 hover:text-gray-300"
    >
      <TrashIcon />
    </button>
  );
};

export default DeleteTodoButton;
