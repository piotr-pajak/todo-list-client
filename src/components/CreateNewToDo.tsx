import CreateTodo from "./buttons/CreateTodo";
import { useRef } from "react";
import { createToDo } from "../../api/api";

const CreateNewToDo = ({ refresh, setRefresh }: refreshStateType) => {
  const newToDoRef = useRef<HTMLInputElement>(null);
  const handleCreateToDo = async () => {
    let newToDo = newToDoRef?.current?.value!;
    await createToDo(newToDo);
    setRefresh(refresh + 1);
  };
  return (
    <div className="flex rounded-md bg-zinc-800 py-3">
      <CreateTodo handleCreateToDo={handleCreateToDo} />
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
