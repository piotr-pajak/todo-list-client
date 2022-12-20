import { ReactComponent as CheckIcon } from "../../assets/icons/check.svg";
import { setFinished, setUnfinished } from "../../../api/api";

type buttonPropsType = {
  id: number;
  iscomplete: boolean;
};
const SwitchFinish = ({ id, iscomplete }: buttonPropsType) => {
  return (
    <button
      onClick={() => (iscomplete ? setUnfinished(id) : setFinished(id))}
      className={`ml-4 flex h-8 w-8 items-center justify-center rounded-full border-2 text-white duration-150 ${
        iscomplete
          ? "border-green-700 bg-green-700 hover:border-green-600 hover:bg-green-600"
          : "border-gray-400 hover:border-gray-100"
      }`}
    >
      <span className="m-4">{iscomplete ? <CheckIcon /> : ""}</span>
    </button>
  );
};

export default SwitchFinish;
