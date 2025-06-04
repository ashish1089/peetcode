/* eslint-disable no-unused-vars */
// import { useContext, useState } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { useParams } from "react-router-dom";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Playground() {
  const { id } = useParams();
  // const [CodeSeg, setCodeSeg] = useState("");
  // const user = useContext(AuthContext);
  const [submission, setSubmission] = useState("");

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

  const handleSubmit = () => {
    console.log(submission,id);
  }

  return (
    <>
      <div className="flex flex-col relative">
        <div className="bg-dark-layer-2 mt-1 text-gray-400 flex gap-2">
          <div className="bg-dark-layer-1 rounded-t-[5px] text-sm cursor-pointer select-none px-4 py-2">
            Code
          </div>
            <div>
            <div className="text-green-500 bg-dark-layer-1 px-4 py-2 border border-none rounded-md cursor-pointer hover:bg-gray-800"
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
            onChange={(value)=>setSubmission(value)}
          />
        </div>
      </div>
    </>
  );
}
