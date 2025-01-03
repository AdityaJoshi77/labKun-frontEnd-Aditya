"use client";

import {useState, useEffect} from 'react';

interface TestcasePanelProps{
  isRun : boolean;
}

const TestcasePanel = ({isRun}:TestcasePanelProps) => {


  return (
    <main className='flex flex-col flex-grow w-full items-center'>

        {/* array of test cases */}
        <div className="flex flex-row items-start  h-[65px] w-11/12">

            <button className='bg-gray-800 text-white rounded-md border px-[23px] py-[5px] hover:bg-gray-700 ml-0 my-4 mx-2'>Case 1</button>
            <button className='bg-gray-800 text-white rounded-md border px-[23px] py-[5px] hover:bg-gray-700 my-4 mx-2'>Case 2</button>
            <button className='bg-gray-800 text-white rounded-md border px-[23px] py-[5px] hover:bg-gray-700 my-4 mx-2'>Case 3</button>

            {/* <button>Case 2</button> */}
            {/* <button>Case 3</button> */}
        </div>

        {/* test input holder */}
        <div className="flex flex-col mb-11 gap-5 items-center justify-center h-full w-11/12">
          
          {/* Input Field */}
          <div className = 'flex flex-col w-full '>
            <label htmlFor="testcase-input" className='text-gray-400 ml-1 text-sm'>Input =</label>
            <input type="text"
            readOnly
            id = "testcase-input"
            value = "input testcase testfield"
            className='bg-gray-700 border p-3 border-black text-white h-[60px] rounded-lg pointer-events-none' />
          </div>
          
          
          {/* Expected Output */}
          <div className="flex flex-col w-full">
            <label htmlFor="expected-output" className='text-gray-400 ml-1 text-sm'>Expected output =</label>
            <input type="text"
            readOnly
            id = "expected-output"
            value = "expected output textfield"
            className='bg-gray-700 border p-3 border-black text-white h-[60px] rounded-lg pointer-events-none' />
          </div>

          
              
          {/* Your Output */}
          {
            isRun ? (
              <div className="flex flex-col w-full">
                <label htmlFor="expected-output" className='text-gray-400 ml-1 text-sm'>Your Output =</label>
                <input type="text"
                readOnly
                id = "expected-output"
                value = "Your output textfield"
                className='bg-gray-700 border p-3 border-black text-white h-[60px] rounded-lg pointer-events-none' />
              </div>
            ) : (<div></div>)
          }
          

        </div>
    </main>
  )
}

export default TestcasePanel

