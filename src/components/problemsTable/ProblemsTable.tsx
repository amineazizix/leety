'use client'

import React, {useEffect} from 'react';
import {BsCheckCircle} from "react-icons/bs";
import Link from "next/link";
import {AiFillYoutube} from "react-icons/ai";
import VideoSolutionModal from "@/components/modals/VideoSolutionModal";
import {useRecoilState} from "recoil";
import {videoSolutionModalState} from "@/atoms/videoSolutionModalAtom";
import useGetProblems from "@/hooks/useGetProblems";
import useGetSolvedProblems from "@/hooks/useGetSolvedProblems";

type ProblemsTableProps = {}

const ProblemsTable: React.FC<ProblemsTableProps> = () => {
  const [videoModal, setVideoModal] = useRecoilState(videoSolutionModalState);
  const problems = useGetProblems();
  const solvedProblems = useGetSolvedProblems();

  return (
    <>
      <tbody className='text-white'>
      {problems.map((problem, idx) => {
        const difficulyColor = problem.difficulty === "Easy" ? "text-dark-green-s"
          : problem.difficulty === "Medium" ? "text-dark-yellow" : "text-dark-pink";
        return (
          <tr className={`${idx % 2 == 1 ? 'bg-dark-layer-1' : ''}`} key={problem.id}>
            <th className='px-2 py-4 font-medium whitespace-nowrap text-dark-green-s'>
              {solvedProblems.includes(problem.id) && <BsCheckCircle fontSize={"18"} width='18' />}
            </th>
            <td className='px-6 py-4'>
              <Link className='hover:text-blue-600 cursor-pointer' href={`/problems/${problem.id}/workspace`}>
                {problem.title}
              </Link>
            </td>
            <td className={`px-6 py-4 ${difficulyColor}`}>{problem.difficulty}</td>
            <td className={`px-6 py-4`}>{problem.category}</td>
            <td className={`px-6 py-4`}>
              {problem.videoId ? (
                <AiFillYoutube fontSize={"28"} className='cursor-pointer hover:text-red-600'
                               onClick={() => setVideoModal({isOpen: true, videoId: problem.videoId as string})}/>
              ) : (
                <p className='text-gray-400'>Coming soon</p>
              )}
            </td>
          </tr>
        )
      })}
      </tbody>
      {videoModal.isOpen && <VideoSolutionModal /> }
    </>
  );
};

export default ProblemsTable;