import SingleToDo from "./SingleToDo";
import React, { SetStateAction } from "react";
import { ToDosType } from "../../custom";

type ToDoState = {
  todos: ToDosType[];
  setTodos: React.Dispatch<SetStateAction<{id: number, todo: string, finished: boolean}[]>>
};

const ToDoList = ({todos, setTodos}: ToDoState) => {
  const sortedTodos = todos.sort(
    (x, y) => Number(x.finished) - Number(y.finished)
  );

  return (
    <ul className="mt-6">
      {sortedTodos.map(({ id, todo, finished }: ToDosType, index) => {
        return (
          <li key={index} className="my-2">
            <SingleToDo
              id={id}
              todo={todo}
              finished={finished}
              setTodos={setTodos}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default ToDoList;
