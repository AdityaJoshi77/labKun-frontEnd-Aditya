"use client"

import { useState } from 'react';
import { MdOutlineDescription } from "react-icons/md";
import Testdashboard from './Testdashboard';


// make arrangements for the testdashboard component.


interface testCaseData{
    testCase:string | null;
    expectedOutput:string | null;
}

interface descriptionProps{
    outputData:string | null;
    testcaseData:testCaseData[] | null;
}

const Description = ({testcaseData, outputData}:descriptionProps) => {

  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <main className='flex flex-col h-auto w-[450px] overflow-hidden rounded-md bg-gray-800 border border-black'>

        {/* Description.TitleBar */}
        <div className='flex flex-row justify-between text-white font-semibold bg-gray-700 rounded-md m-1 py-4'>
            {/* icon div */}
            <div className='flex items-center justify-center text-cyan-400 text-xl pl-2 pr-2'>
                <MdOutlineDescription />
                <span className='text-gray-200 pl-2 '>Description</span>
            </div>

            <button className='rounded-lg mr-4 bg-gray-600 border border-gray-500 text-white font-semibold px-3 py-2 hover:bg-gray-800'>Test Cases ▼</button>
        </div>

        {/* Content Section */}
        <div className='flex-1 flex-col overflow-auto m-1 mt-3'>
            
            {/* Problem Statement */}
            <div className='flex flex-col text-white mx-4'>
                {/* Problem Title */}
                <h1 className='text-white font-medium text-xl'>1. Add Two Numbers</h1>

                {/* Problem Text */}
                <p className='font-normal mt-4'>
                    Given two non-negative integers, <strong>num1</strong> and <strong>num2</strong>, 
                    represented as non-empty linked lists, add the two numbers and return it as a linked list.
                    You may assume the two numbers do not contain any leading zero, except the number 0 itself.
                    <br /><br />
                    Each node in the linked list represents a single digit and is stored in reverse order.
                    Add the two numbers and return the sum as a linked list. The input is given as two linked lists,
                    where each node contains a digit of the number, stored in reverse order.
                    <br /><br />
                    You must not use any built-in libraries like BigInteger. Only basic arithmetic operations should be used.
                    <br /><br />
                </p>
                <p>Constraints:</p> 
                <ul className='list-disc pl-6'>
                    <li>The number of nodes in each list is between 1 and 100.</li>
                    <li>Each node in each list is a single digit, in the range [0, 9].</li>
                    <li>It is guaranteed that the list represents a number that does not have leading zeros, except for the number 0 itself.</li>
                </ul>
            </div>

            {/* Examples */}
            <div className='flex flex-col mt-4'>
                {/* Example TitleBar */}
                <div className='text-white font-semibold bg-gray-700 rounded-md pt-2 pl-1 pb-2'>Examples : </div>

                {/* Example Items */}
                <div className='text-white font-medium text-sm mx-4'>
                    <div className='mt-4'>
                        <p>Example 1:</p>
                        <p><strong>Input:</strong> num1 = [2,4,3], num2 = [5,6,4]</p>
                        <p><strong>Output:</strong> [7,0,8]</p>
                        <p><strong>Explanation:</strong> 342 + 465 = 807.</p>
                    </div>
                    <div className='mt-4'>
                        <p>Example 2:</p>
                        <p><strong>Input:</strong> num1 = [0], num2 = [0]</p>
                        <p><strong>Output:</strong> [0]</p>
                        <p><strong>Explanation:</strong> 0 + 0 = 0.</p>
                    </div>
                    <div className='mt-4'>
                        <p>Example 3:</p>
                        <p><strong>Input:</strong> num1 = [9,9,9], num2 = [1]</p>
                        <p><strong>Output:</strong> [0,0,0,1]</p>
                        <p><strong>Explanation:</strong> 999 + 1 = 1000.</p>
                    </div>
                </div>
                
            </div>

            {/* Constraints */}
            <div className='text-white mt-4'>

                {/* constraint Title bar */}
                <div className='font-semibold bg-gray-700 rounded-md pt-2 pl-1 pb-2'>Constraints:</div>

                {/* constraint items */}
                <ul className='list-disc pl-5 mt-4 mx-4 font-medium text-sm'>
                    <li>The number of nodes in each list is between 1 and 100.</li>
                    <li>Each node in each list is a single digit, in the range [0, 9].</li>
                    {/* <li>It is guaranteed that the list represents a number that does not have leading zeros, except for the number 0 itself.</li> */}
                </ul>
            </div>
        </div>

        {/* Description.Footer */}
        <div className=' text-white font-semibold bg-gray-700 rounded-md m-1 pt-4 pb-4 '>
            <p className='text-center'>Description Footer Section</p>
        </div>
    </main>
  )
}

export default Description
