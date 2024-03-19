'use client'

import React from 'react';
import Split from "react-split";
import ProblemDescription from "@/components/workspace/problemDescription/ProblemDescription";
import Playground from "@/components/workspace/playground/Playground";
import {Problem} from "@/data/problems/types/problem";

type WorkspaceProps = {
  problem: Problem;
}
const Workspace: React.FC<WorkspaceProps> = ({problem}) => {
  return (
    <Split className='split' minSize={0}>
      <ProblemDescription problem={problem}/>
      <Playground problem={problem}/>
    </Split>
  );
};

export default Workspace;