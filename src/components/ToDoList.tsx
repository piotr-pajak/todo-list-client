import SingleToDo from "./SingleToDo";
import React from "react";

type toDoState = {
  refresh: number;
  setRefresh: React.Dispatch<React.SetStateAction<number>>;
  todos: toDosType[];
};

const ToDoList = (props: toDoState) => {
  const { refresh, setRefresh, todos } = props;
  console.log(1);
  const sortedTodos = todos.sort(
    (x, y) => Number(x.finished) - Number(y.finished)
  );
  return (
    <ul className="mt-6">
      {sortedTodos.map(({ id, todo, finished }: toDosType, index) => {
        return (
          <li key={index} className="my-2">
            <SingleToDo
              id={id}
              todo={todo}
              finished={finished}
              refresh={refresh}
              setRefresh={setRefresh}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default ToDoList;
