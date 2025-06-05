import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../constant";

type example = {
  id: number;
  Input: string;
  Output: string;
  Explanation?: string;
  img?: string;
};

export type ProblemType = {
  problemId: string;
  title: string;
  acceptance: string;
  difficulty: string;
  description: string;
  examples: example[];
  constraints: string[];
};

export default function Dashboard() {
  const [problems, setProblems] = useState<ProblemType[]>();

  async function init() {
    const response = await fetch(`${BASE_URL}/problems`, {
      method: "GET",
    });
    const { problems } = await response.json();
    setProblems(problems);
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="px-4 flex justify-center">
      <div className="mt-16 mx-auto w-4/5">
        <table className="min-w-full text-lg ">
          <thead className="text-gray-400 text-sm text-left  border-b border-gray-700">
            <tr>
              <th className="font-light px-4 py-2">Title</th>
              <th className="font-light px-4 py-2">Difficulty</th>
              <th className="font-light px-4 py-2">Acceptance</th>
            </tr>
          </thead>
          <tbody className="font-light">
            {problems?.map((x, i) => (
              <tr key={i} className={i % 2 != 0 ? "bg-[#2a2a2a]" : ""}>
                <td className="w-fit px-4 py-1">
                  <Link to={`/problems/${x.problemId}`} className="text-white ">
                    {`${x.problemId}. ${x.title}`}
                  </Link>
                </td>
                <td className={`${x.difficulty} w-fit px-4 py-2`}>
                  {x.difficulty}
                </td>
                <td className={`text-white w-fit px-4 py-2`}>{x.acceptance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
