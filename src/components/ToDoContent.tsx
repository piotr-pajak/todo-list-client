import React from "react";

const ToDoContent = ({ ...props }) => {
  const { editState, todo, toDoContentRef, finished } = props;
  return (
    <>
      {editState ? (
        <input
          type="text"
          placeholder={todo}
          className="mr-4 w-full bg-transparent py-1 pl-2 text-gray-500 placeholder:text-gray-500"
          ref={toDoContentRef}
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
