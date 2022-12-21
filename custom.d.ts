declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}

type toDosType = {
  id: number;
  todo: string;
  finished: boolean;
};

type toDoListType = {
  id: number;
  todo: string;
  finished: boolean;

  refresh: number;
  setRefresh: React.Dispatch<React.SetStateAction<number>>;
};

type refreshStateType = {
  refresh: number;
  setRefresh: React.Dispatch<React.SetStateAction<number>>;
};
