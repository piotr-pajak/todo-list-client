import DefaultLayout from "./layout/Default";
import CreateNewToDo from "./components/CreateNewToDo";
import ToDoList from "./components/ToDoList";
import { SetStateAction, useEffect, useState } from "react";
import { getAllToDos } from "../api/api";

function App() {
  const [refresh, setRefresh] = useState(0);
  const [todos, setTodos] = useState([
    {
      id: 1,
      todo: "Sample ToDo",
      finished: false,
    },
  ]);

  useEffect(() => {
    getAllToDos().then(
      (data: SetStateAction<{ id: number; todo: string; finished: boolean }[]>) => setTodos(data)
    );
  }, [refresh]);
  return (
    <DefaultLayout>
      <CreateNewToDo refresh={refresh} setRefresh={setRefresh} />
      <ToDoList todos={todos} refresh={refresh} setRefresh={setRefresh} />
    </DefaultLayout>
  );
}

export default App;
