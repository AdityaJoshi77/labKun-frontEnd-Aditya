
"use client"
import { useState } from "react"
import TestcasePanel from "./TestcasePanel";
import TestresultPanel from "./TestresultPanel";


const Testdashboard = () => {

const [toggle, setToggle] = useState<boolean>(true);

  return (
    <main className='flex flex-col w-[700px] h-[200px] rounded-lg border border-gray-500'>

        {/* test panel's dashboard */}
        <div className="flex flex-row bg-gray-900 text-gray-600 ">
            <button onClick={() => setToggle(true)} className="bg-gray-800 text-white rounded-md border hover:bg-gray-700 m-4">Test Cases</button>
             |  
            <button onClick={() => setToggle(false)} className="bg-gray-800 text-white rounded-md border hover:bg-gray-700 m-4">Test Result</button>
        </div>

        {/* div for TestCase / TestResult Panel */}
        <div className="bg-gray-800 h-full">
            {/* { toggle ? (<TestcasePanel/>) : (<TestresultPanel/>)} */}
        </div>
    </main>
  )
}

export default Testdashboard