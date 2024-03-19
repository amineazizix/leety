import {useEffect, useState} from "react";
import {query} from "@firebase/database";
import {collection, getDocs, orderBy} from "@firebase/firestore";
import { firestore } from "@/firebase/firebase"
import {DBProblem} from "@/data/problems/types/problem";

export default function useGetProblems() {
  const [problems, setProblems] = useState<DBProblem[]>([]);

  useEffect(() => {
    const getProblems = async () => {
      // fetching data logic
      const colRef = collection(firestore, 'problems');

      // const q = query(colRef, orderBy("order", "asc"));

      const querySnapshot = await getDocs(colRef);
      const tmp: DBProblem[] = [];
      querySnapshot.forEach((doc) => {
        tmp.push({ id: doc.id, ...doc.data() as Record<string, unknown> } as DBProblem);
      });
      const problems = tmp.sort((a, b) => a.order - b.order )
      setProblems(problems);
    };

    getProblems().then(() => {});
  }, []);

  return problems;
}