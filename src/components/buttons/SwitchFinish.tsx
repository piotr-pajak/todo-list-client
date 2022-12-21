import { ReactComponent as CheckIcon } from "../../assets/icons/check-sm.svg";
import { setFinished, setUnfinished } from "../../../api/api";
import React from "react";

type buttonPropsType = {
  id: number;
  finished: boolean;
  refresh: number;
  setRefresh: React.Dispatch<React.SetStateAction<number>>;
};
const SwitchFinish = ({
  id,
  finished,
  refresh,
  setRefresh,
}: buttonPropsType) => {
  const handleSetFinished = () => {
    setFinished(id);
    setRefresh(refresh + 1);
  };

  const handleSetUnFinished = () => {
    setUnfinished(id);
    setRefresh(refresh + 1);
  };
  return (
    <button
      onClick={finished ? handleSetUnFinished : handleSetFinished}
      className={`ml-4 flex h-8 w-8 items-center justify-center rounded-full border-2 text-white duration-150 ${
        finished
          ? "border-green-700 bg-green-700 hover:border-green-600 hover:bg-green-600"
          : "border-gray-400 hover:border-gray-100"
      }`}
    >
      <span className="m-4">{finished ? <CheckIcon /> : ""}</span>
    </button>
  );
};

export default SwitchFinish;
