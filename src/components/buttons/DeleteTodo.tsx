import { ReactComponent as TrashIcon } from "../../assets/icons/trash.svg";
import { deleteToDo } from "../../../api/api";
import React from "react";

type deleteToDoProps = {
  id: number;
  refresh: number;
  setRefresh: React.Dispatch<React.SetStateAction<number>>;
};

const DeleteTodo = ({ id, refresh, setRefresh }: deleteToDoProps) => {
  const handleDeleteToDo = async () => {
    await deleteToDo(id);
    setRefresh(refresh + 1);
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

export default DeleteTodo;
