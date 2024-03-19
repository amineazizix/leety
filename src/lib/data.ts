import {problems} from "@/data/problems";
import {query} from "@firebase/database";
import {collection, getDocs, orderBy} from "@firebase/firestore";
import {firestore} from "@/firebase/firebase";
import {DBProblem} from "@/data/problems/types/problem";

export async function fetchProblemById(id: string) {

  const problem = problems[id];

  if(!problem) throw new Error('Failed to fetch revenue data.');

  return problem;
}

export async function fetchProblems() {
  // const q = query(collection(firestore, "problems"), orderBy("order", "asc"));
  // const querySnapshot = await getDocs(q);
  // const tmp: DBProblem[] = [];
  // querySnapshot.forEach((doc) => {
  //   tmp.push({ id: doc.id, ...doc.data() } as DBProblem);
  // });
  // return tmp;
}