
"use client"
import { useState } from "react"
import TestcasePanel from "./TestcasePanel";
import TestresultPanel from "./TestresultPanel";

// interface TestdashboardProps{
//   isCodeRunning : boolean;
// }

const Testdashboard = (/**isCodeRunning:TestdashboardProps */) => {

const [selectedButton, setSelectedButton] = useState<'test-case' | 'test-result'>();

// ICR == isCodeRunning
var ICR = false;

  return (
  <div className="testDiv flex flex-row items-center justify-center bg-gray-700 w-screen h-screen">

    {/* THE TEST CASES BOX */}
    <div className='flex flex-col w-[600px] min-h-[300px] max-h-full  rounded-xl border border-gray-400'>

      {/* test panel's dashboard */}
      <div className="flex flex-row items-center justify-center h-[65px] rounded-tl-xl rounded-tr-xl border-b  bg-gray-900 ">

        <div className="flex flex-row w-11/12  items-start">
          <button onClick={() => setSelectedButton('test-case')} className={
            selectedButton === 'test-case' ? 'bg-blue-900 border border-white px-2 py-1 rounded-md ml-0 my-4 mx-2 text-white' : 'bg-gray-800 text-white rounded-md border px-2 py-1 hover:bg-gray-700 ml-0 my-4 mx-2'
          }>Test Cases</button>
          
          <button onClick={() => setSelectedButton('test-result')} className={
            selectedButton === 'test-result' ? 'bg-blue-900 border border-white px-2 py-1 rounded-md my-4 mx-2 text-white' : 'bg-gray-800 text-white rounded-md border px-2 py-1 hover:bg-gray-700 my-4 mx-2'
          }>Test Result</button>

        </div>
      </div>

      {/* div for TestCase / TestResult Panel */}
      <div className="flex flex-col items-center justify-center bg-gray-800 h-full rounded-bl-xl rounded-br-xl text-gray-400">
          { selectedButton === 'test-result' ? (<TestresultPanel isRun = {ICR} />) : (<TestcasePanel isRun = {ICR}/>)}
         
      </div>

    </div>
  </div>
  )
}

export default Testdashboard