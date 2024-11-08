import Split from "react-split";
import Playground from "./Playground";
import ProblemDescription from "./ProblemDescription";

export default function Problems() {
  return (
    <Split className="split h-full" minSize={0}>
      <ProblemDescription />

      <Playground />
    </Split>
  );
}
