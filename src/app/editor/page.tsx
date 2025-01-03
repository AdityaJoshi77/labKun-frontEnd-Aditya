"use client"
import { useState,useEffect } from "react";
import Description from "../components/Description";
import CodeEditor from "../components/CodeEditor";

interface testCaseData{
  testCase:string;
  expectedOutput:string;
}

// The backend API call for the testcases data (whatever be its format) will be made
// on the editor page.
// the page will then share the data of test cases down to the description.


// for the simplicty, we'll move ahead considering that there's only one test case

const Editor: React.FC = () => {

  const[outputData, setOutputData] = useState(null);
  
  const[testCases, setTestCases] = useState<testCaseData[] | null>(null);

  useEffect(()=>{
    const fetchTestCases = async() => {

      //setLoading(true);
      try{
        const dummy = [
          {
            testCase:"[1,2]",
            expectedOutput:"3"
          },
          {
            testCase:"[4,7]",
            expectedOutput:"11"
          },
          {
            testCase:"[9,-3]",
            expectedOutput:"6"
          },
        ]

        setTestCases(dummy);
      }catch(error:any){
        console.log("Error fetching testcase Data", error);
      }finally{
        //setLoading(false);
      }
    }

    fetchTestCases();
  },[])

  return (
    <div className="h-screen bg-gray-900 text-white flex flex-row p-4 gap-4">
      <Description outputData = {outputData} testcaseData = {testCases}/>
      <div className="flex-1 resize-x">
        <CodeEditor setOutputData = {setOutputData}/>
      </div>
    </div>
  );
};

export default Editor;
