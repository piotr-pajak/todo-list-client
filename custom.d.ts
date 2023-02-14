import React, { MouseEventHandler, RefObject, SetStateAction } from "react";

declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}

type SetTodosState = {
  setTodos: React.Dispatch<
    SetStateAction<{ id: number; todo: string; finished: boolean }[]>
  >;
};

type ToDosType = {
  id: number;
  todo: string;
  finished: boolean;
};

type ToDoListType = {
  id: number;
  todo: string;
  finished: boolean;
  setTodos: React.Dispatch<
    SetStateAction<{ id: number; todo: string; finished: boolean }[]>
  >;
};

type buttonPropsType = {
  id: number;
  finished: boolean;
  setTodos: React.Dispatch<SetStateAction<ToDosType[]>>;
};

type ToDoContentType = {
  editState: boolean;
  todo: string;
  toDoContentRef: RefObject<HTMLInputElement>;
  finished: boolean;
  handleEditTodo: (event: KeyboardEvent<HTMLInputElement>) => void;
};

type EditTodoButtonProps = {
  handleEditTodo: MouseEventHandler<HTMLButtonElement>;
  editState: boolean;
  setEditState: React.Dispatch<React.SetStateAction<boolean>>;
};
