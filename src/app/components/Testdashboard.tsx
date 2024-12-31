
"use client"
import { useState } from "react"
import TestcasePanel from "./TestcasePanel";
import TestresultPanel from "./TestresultPanel";


const Testdashboard = () => {

const [toggle, setToggle] = useState<boolean>(true);

  return (
  <div className="testDiv flex flex-row items-center justify-center bg-gray-700 w-screen h-screen">
    <div className='flex flex-col w-[700px] h-[200px] rounded-2xl border border-gray-500'>

      {/* test panel's dashboard */}
      <div className="flex flex-row just rounded-tl-xl rounded-tr-xl bg-gray-900 text-gray-600 ">
        <button onClick={() => setToggle(true)} className="bg-gray-800 text-white rounded-md border px-3 py-2 hover:bg-gray-700 m-4">Test Cases</button>
        
        <button onClick={() => setToggle(false)} className="bg-gray-800 text-white rounded-md border px-3 py-2 hover:bg-gray-700 m-4">Test Result</button>
      </div>

      {/* div for TestCase / TestResult Panel */}
      <div className="bg-gray-800 h-full rounded-bl-xl rounded-br-xl">
          {/* { toggle ? (<TestcasePanel/>) : (<TestresultPanel/>)} */}
      </div>

    </div>
  </div>
  )
}

export default Testdashboard