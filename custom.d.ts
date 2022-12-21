import React, {SetStateAction} from "react";

declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}

type SetTodosState = {
  setTodos: React.Dispatch<SetStateAction<{id: number, todo: string, finished: boolean}[]>>
}

type ToDosType = {
  id: number;
  todo: string;
  finished: boolean;
};

type ToDoListType = {
  id: number;
  todo: string;
  finished: boolean;
  setTodos: React.Dispatch<SetStateAction<{id: number, todo: string, finished: boolean}[]>>
};

type refreshStateType = {
  refresh: number;
  setRefresh: React.Dispatch<React.SetStateAction<number>>;
};
