import type {Metadata} from "next";
import Topbar from "@/components/topbar/Topbar";
import ProblemsTable from "@/components/problemsTable/ProblemsTable";
import React, {Suspense} from "react";
// import { doc, setDoc } from "firebase/firestore";
// import {firestore} from "@/firebase/firebase";

export const metadata: Metadata = {
  title: "Leety",
  description: "Learn to code",
};

export default function Home() {
  // Adding problems to DB
  // const [inputs, setInputs] = useState({
  //   id: '',
  //   title: '',
  //   difficulty: '',
  //   category: '',
  //   order: 0,
  //   videoId: '',
  //   link: '',
  //   likes: 0,
  //   dislikes: 0,
  // })
  //
  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputs({
  //     ...inputs,
  //   [e.target.name]: e.target.value
  //   })
  // }
  //
  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const newInputs = {
  //     ...inputs,
  //     order: Number(inputs.order),
  //   }
  //   await setDoc(doc(firestore, "problems", inputs.id), newInputs);
  //   alert('Saved to DB');
  // }

  return (
    <main className="bg-dark-layer-2 min-h-screen">
      <Topbar/>

      <h1
        className='text-2xl text-center text-gray-700 dark:text-gray-400 font-medium uppercase mt-10 mb-5'>
        &ldquo; QUALITY OVER QUANTITY &rdquo; 👇
      </h1>

      <div className='relative overflow-x-auto mx-auto px-6 pb-10'>
        <table className='text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto'>
          <thead className='text-xs text-gray-700 uppercase dark:text-gray-400 border-b '>
          <tr>
            <th scope='col' className='px-1 py-3 w-0 font-medium'>
              Status
            </th>
            <th scope='col' className='px-6 py-3 w-0 font-medium'>
              Title
            </th>
            <th scope='col' className='px-6 py-3 w-0 font-medium'>
              Difficulty
            </th>

            <th scope='col' className='px-6 py-3 w-0 font-medium'>
              Category
            </th>
            <th scope='col' className='px-6 py-3 w-0 font-medium'>
              Solution
            </th>
          </tr>
          </thead>

          <Suspense fallback={<LoadingSkeleton />}>
            <ProblemsTable />
          </Suspense>

          <tfoot className='text-xs text-gray-700 uppercase dark:text-gray-400 border-t '>
            <tr>
              <th scope="col" className='px-6 py-3 w-0 font-medium'>Total Resolved</th>
              <td scope="col" className='px-6 py-3 w-0 font-medium'>21</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Adding problems to DB */}
      {/*<form className='p-6 flex flex-col max-w-sm gap-3' onSubmit={handleSubmit}>*/}
      {/*  <input onChange={handleInputChange} type="text" placeholder='problem id' name='id'/>*/}
      {/*  <input onChange={handleInputChange} type="text" placeholder='title' name='title'/>*/}
      {/*  <input onChange={handleInputChange} type="text" placeholder='difficulty' name='difficulty'/>*/}
      {/*  <input onChange={handleInputChange} type="text" placeholder='category' name='category'/>*/}
      {/*  <input onChange={handleInputChange} type="text" placeholder='order' name='order'/>*/}
      {/*  <input onChange={handleInputChange} type="text" placeholder='videoId?' name='videoId'/>*/}
      {/*  <input onChange={handleInputChange} type="text" placeholder='link?' name='link'/>*/}
      {/*  <button>Save to db</button>*/}
      {/*</form>*/}

    </main>
  );
}

const LoadingSkeleton = () => {
  return (
    <div className='max-w-[1200px] mx-auto sm:w-7/12 w-full animate-pulse'>
      <div className='flex items-center space-x-12 mt-4 px-6'>
        <div className='w-6 h-6 shrink-0 rounded-full bg-dark-layer-1'></div>
        <div className='h-4 sm:w-52  w-32  rounded-full bg-dark-layer-1'></div>
        <div className='h-4 sm:w-52  w-32 rounded-full bg-dark-layer-1'></div>
        <div className='h-4 sm:w-52 w-32 rounded-full bg-dark-layer-1'></div>
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  );
};
