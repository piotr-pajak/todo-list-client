import DefaultLayout from "./layout/Default";
import CreateNewToDo from "./components/CreateNewToDo";
import ToDoList from "./components/ToDoList";
import { SetStateAction, useEffect, useState } from "react";
import { getAllToDos } from "../api/api";
import {ToDosType} from "../custom";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      todo: "Sample ToDo",
      finished: false,
    },
  ]);

  useEffect(() => {
    getAllToDos()
        .then((data: SetStateAction<ToDosType[]>) => setTodos(data));
  }, []);

  return (
    <DefaultLayout>
      <CreateNewToDo setTodos={setTodos} />
      <ToDoList todos={todos} setTodos={setTodos} />
    </DefaultLayout>
  );
}

export default App;
