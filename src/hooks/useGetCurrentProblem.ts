import {useEffect, useState} from "react";
import {DBProblem} from "@/data/problems/types/problem";
import {doc, getDoc} from "@firebase/firestore";
import {firestore} from "@/firebase/firebase";

export default function useGetCurrentProblem(problemId: string) {
  const [currentProblem, setCurrentProblem] = useState<DBProblem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [problemDifficultyClass, setProblemDifficultyClass] = useState<string>("");

  useEffect(() => {
    // Get problem from DB
    const getCurrentProblem = async () => {
      setLoading(true);
      const docRef = doc(firestore, "problems", problemId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const problem = docSnap.data();
        setCurrentProblem({ id: docSnap.id, ...problem } as DBProblem);
        // easy, medium, hard
        setProblemDifficultyClass(
          problem.difficulty === "Easy"
            ? "bg-green-700 text-green-400"
            : problem.difficulty === "Medium"
              ? "bg-dark-yellow text-dark-yellow"
              : " bg-dark-pink text-dark-pink"
        );
      }
      setLoading(false);
    };
    getCurrentProblem().then(()=>{});
  }, [problemId]);

  return { currentProblem, loading, problemDifficultyClass, setCurrentProblem };
}