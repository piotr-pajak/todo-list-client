import React from "react";
import { ToDoContentType } from "../../custom";

const ToDoContent = ({
  editState,
  todo,
  toDoContentRef,
  finished,
  handleEditTodo,
}: ToDoContentType) => {
  return (
    <>
      {editState ? (
        <input
          type="text"
          placeholder={todo}
          className="mr-4 w-full bg-transparent py-1 pl-2 text-gray-500 placeholder:text-gray-500"
          ref={toDoContentRef}
          onKeyDown={handleEditTodo}
        />
      ) : (
        <p
          className={`font-semibold ${
            finished ? "text-gray-500 line-through" : "text-gray-400"
          }`}
        >
          {todo}
        </p>
      )}
    </>
  );
};

export default ToDoContent;
