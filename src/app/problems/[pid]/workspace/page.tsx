'use client'

import React from 'react';
import Topbar from "@/components/topbar/Topbar";
import Workspace from "@/components/workspace/Workspace";
import {Problem} from "@/data/problems/types/problem";
import {tsParseMaybeAssignWithJSX} from "sucrase/dist/types/parser/plugins/typescript";
import {fetchProblemById} from "@/lib/data";

type ProblemPageProps = {
  params: { pid: string; };
}

const ProblemPage: React.FC<ProblemPageProps> = async ({ params }: ProblemPageProps) => {
  const pid = params.pid;
  const problem = await fetchProblemById(pid);

  return (
    <div>
      <Topbar problemPage />
      <Workspace problem={problem}/>
    </div>
  );
};

export default ProblemPage;