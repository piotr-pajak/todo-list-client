import React from "react";

type Props = {
  children: React.ReactNode;
};
const LayoutDefaultWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex w-full flex-col justify-center items-center bg-zinc-900 h-screen">
      <div className="w-1/3">{children}</div>
    </div>
  );
};
export default LayoutDefaultWrapper;
