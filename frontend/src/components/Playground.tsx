import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import { useContext, useState } from "react";
// import { useParams } from "react-router-dom";
import { UserContext } from "../context/AuthContext";
import { handleTwoSum, starterCode } from "../utils/problems/two-sum";

export default function Playground() {
  // const { id } = useParams();
  // const [CodeSeg, setCodeSeg] = useState("");
  const user = useContext(UserContext);
  const [submission, setSubmission] = useState(starterCode);

  // const handleKey = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   if (event.key == "Tab") {
  //     event.preventDefault();
  //     const { selectionStart, selectionEnd, value } = event.target;
  //     const val =
  //       value.substring(0, selectionStart) +
  //       "\t" +
  //       value.substring(selectionStart);
  //     event.target.value = val;
  //     event.target.selectionStart = event.target.selectionEnd =
  //       selectionStart + 1;
  //   }
  //   setCodeSeg(event.value);
  // };

  const handleSubmit = async () => {
    if (user?.profile) {
      const cb = new Function(`return ${submission}`)();
      handleTwoSum(cb);
    } else {
      alert("Please login to submit your code.");
    }
  };

  return (
    <>
      <div className="flex flex-col relative">
        <div className="bg-dark-layer-2 mt-1 text-gray-400 flex gap-2">
          <div className="bg-dark-layer-1 rounded-t-[5px] text-sm cursor-pointer select-none px-4 py-2">
            Code
          </div>
          <div>
            <div
              className="text-green-500 bg-dark-layer-1 px-4 py-2 border border-none rounded-md cursor-pointer hover:bg-gray-800"
              onClick={handleSubmit}
            >
              Submit
            </div>
          </div>
        </div>
        <div className="bg-dark-layer-2 text-gray-400">
          <div className="bg-dark-layer-1 rounded  text-sm cursor-pointer select-none px-2 py-1 mt-1">
            JavaScript
          </div>
        </div>
        <div className="w-full overflow-auto bg-dark-layer-1 h-full">
          <CodeMirror
            value={submission}
            theme={vscodeDark}
            extensions={[javascript()]}
            style={{ fontSize: 16 }}
            onChange={(value) => setSubmission(value)}
          />
        </div>
      </div>
    </>
  );
}
