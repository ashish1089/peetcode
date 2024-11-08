import { BsCheck2Circle } from "react-icons/bs";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { TiStarOutline } from "react-icons/ti";
import { ProblemType } from "./Dashboard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../constant";

export default function ProblemDescription() {
  const [problem, setProblem] = useState<ProblemType | undefined>(undefined);
  const { id } = useParams();

  const init = async () => {
    const response = await fetch(`${BASE_URL}/problems/${id}`, {
      method: "GET",
    });
    const json = await response.json();
    setProblem(json.problem);
  };

  useEffect(() => {
    init();
  });

  return (
    <>
      <div className="text-white mt-1 pl-1">
        <div className="bg-dark-layer-2  w-fit text-white flex gap-2">
          <div className="bg-dark-layer-1 rounded-t-[5px] text-sm cursor-pointer select-none px-4 py-2">
            Description
          </div>
        </div>
        <div className="flex px-0 py-4 h-[calc(100vh-94px)] overflow-y-auto">
          <div className="px-5">
            <div className="w-full">
              <div className="flex space-x-4">
                <div className="flex-1 mr-2 text-lg text-white font-medium">
                  {`${problem?.problemId}. ${problem?.title}`}
                </div>
              </div>
              <div className="flex items-center mt-3">
                <div
                  className={`${problem?.difficulty} bg-dark-fill-3 inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize `}
                >
                  {problem?.difficulty}
                </div>
                <div className="rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-green-s text-dark-green-s">
                  <BsCheck2Circle />
                </div>
                <div className="flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-dark-gray-6">
                  <AiFillLike />
                  <span className="text-xs">120</span>
                </div>
                <div className="flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-green-s text-dark-gray-6">
                  <AiFillDislike />
                  <span className="text-xs">2</span>
                </div>
                <div className="cursor-pointer hover:bg-dark-fill-3  rounded p-[3px]  ml-4 text-xl transition-colors duration-200 text-green-s text-dark-gray-6 ">
                  <TiStarOutline />
                </div>
              </div>

              <div className="text-white text-base mt-2">
                {problem?.description}
              </div>

              <div className="mt-4 text-xs">
                <div>
                  <p className="text-white ">Example 1: </p>
                  <div className="example-card">
                    <pre>
                      <span className="text-white">Input: </span> nums =
                      [2,7,11,15], target = 9 <br />
                      <span>Output:</span> [0,1] <br />
                      <span>Explanation:</span>Because nums[0] + nums[1] == 9,
                      we return [0, 1].
                    </pre>
                  </div>
                </div>

                <div>
                  <p className="font-medium text-white ">Example 2: </p>
                  <div className="example-card">
                    <pre>
                      <span className="text-white">Input: </span> nums =
                      [3,2,4], target = 6 <br />
                      <span>Output:</span> [1,2] <br />
                      <span>Explanation:</span>Because nums[1] + nums[2] == 6,
                      we return [1, 2].
                    </pre>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-white ">Example 3: </p>
                  <div className="example-card">
                    <pre>
                      <span className="text-white">Input: </span> nums = [3,3],
                      target = 6
                      <br />
                      <span>Output:</span> [0,1] <br />
                    </pre>
                  </div>
                </div>
              </div>

              <div className="my-5">
                <div className="text-white text-xs ">Constraints:</div>
                <ul className="text-white ml-5 list-disc">
                  <li className="mt-2">
                    <code>2 ≤ nums.length ≤ 10</code>
                  </li>

                  <li className="mt-2">
                    <code>-10 ≤ nums[i] ≤ 10</code>
                  </li>
                  <li className="mt-2">
                    <code>-10 ≤ target ≤ 10</code>
                  </li>
                  <li className="mt-2 text-xs">
                    <span>Only one valid answer exists.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
