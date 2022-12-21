import CreateTodoButton from "./buttons/CreateTodoButton";
import React, { useRef } from "react";
import { createToDo } from "../../api/api";
import { SetTodosState } from "../../custom";

const CreateNewToDo = ({ setTodos }: SetTodosState) => {

  const newToDoRef = useRef<HTMLInputElement>(null);
  const handleCreateToDo = async () => {
    let newToDo = newToDoRef?.current?.value!;
    await createToDo(newToDo);
    setTodos( prevTodos => ([...prevTodos, {id: prevTodos.length + 1, todo: newToDo, finished: false}]));
  };

  return (
    <div className="flex rounded-md bg-zinc-800 py-3">
      <CreateTodoButton handleCreateToDo={handleCreateToDo} />
      <input
        type="text"
        placeholder="Create a new todo..."
        className="mx-4 w-full bg-transparent text-gray-400 placeholder:text-gray-500"
        ref={newToDoRef}
      />
    </div>
  );
};
export default CreateNewToDo;
