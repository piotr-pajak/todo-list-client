import SwitchFinishButton from "./buttons/SwitchFinishButton";
import DeleteTodoButton from "./buttons/DeleteTodoButton";
import React, { useRef, useState } from "react";
import EditTodoButton from "./buttons/EditTodoButton";
import { editTodo } from "../../api/api";
import ToDoContent from "./ToDoContent";
import { ToDoListType } from "../../custom";

const SingleToDo = ({ id, todo, finished, setTodos }: ToDoListType) => {
  const [editState, setEditState] = useState(false);
  const toDoContentRef = useRef<HTMLInputElement>(null);

  const handleEditTodo = async (event) => {
    let newTodoContent = toDoContentRef?.current?.value!;

    if (event.key === "Enter" || event.type === "click") {
      await editTodo(id, newTodoContent);
      setEditState(!editState);
      setTodos((prevTodos) =>
        prevTodos.map((todo) => {
          if (todo.id === id) return { ...todo, todo: newTodoContent };
          return todo;
        })
      );
    }
  };

  return (
    <div className="flex items-center rounded-md bg-zinc-800">
      <SwitchFinishButton id={id} finished={finished} setTodos={setTodos} />

      <div className="flex w-full items-center justify-between py-3 px-4">
        <ToDoContent
          todo={todo}
          finished={finished}
          toDoContentRef={toDoContentRef}
          editState={editState}
          handleEditTodo={handleEditTodo}
        />

        <div className="flex gap-x-3">
          <EditTodoButton
            handleEditTodo={handleEditTodo}
            editState={editState}
            setEditState={setEditState}
          />
          <DeleteTodoButton id={id} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
};

export default SingleToDo;
