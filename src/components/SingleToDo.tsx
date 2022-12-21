import SwitchFinish from "./buttons/SwitchFinish";
import DeleteTodo from "./buttons/DeleteTodo";
import React, { useRef, useState } from "react";
import EditTodo from "./buttons/EditTodo";
import { editTodo } from "../../api/api";
import ToDoContent from "./ToDoContent";

const SingleToDo = ({
  id,
  todo,
  finished,
  refresh,
  setRefresh,
}: toDoListType) => {
  const [editState, setEditState] = useState(false);
  const toDoContentRef = useRef<HTMLInputElement>(null);

  const handleEditTodo = async () => {
    let newTodoContent = toDoContentRef?.current?.value!;
    if (newTodoContent === "") {
      newTodoContent = todo;
    }
    await editTodo(id, newTodoContent);
    setEditState(!editState);
    setRefresh(refresh + 1);
  };

  return (
    <div className="flex items-center rounded-md bg-zinc-800">
      <SwitchFinish
        id={id}
        finished={finished}
        refresh={refresh}
        setRefresh={setRefresh}
      />

      <div className="flex w-full items-center justify-between py-3 px-4">
        <ToDoContent
          todo={todo}
          finished={finished}
          toDoContentRef={toDoContentRef}
          editState={editState}
        />
        <div className="flex gap-x-3">
          <EditTodo
            handleEditTodo={handleEditTodo}
            editState={editState}
            setEditState={setEditState}
          />
          <DeleteTodo id={id} refresh={refresh} setRefresh={setRefresh} />
        </div>
      </div>
    </div>
  );
};
export default SingleToDo;
