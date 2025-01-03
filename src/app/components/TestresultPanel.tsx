"use client"; // Ensure this is at the top if you need client-side rendering

import React from 'react';

interface TestresultPanelProps {
  isRun: boolean;
}

const TestresultPanel: React.FC<TestresultPanelProps> = ({ isRun }) => {
  return (
    <div className='flex flex-col flex-grow min-h-[300px] w-full items-center justify-center'>
      {isRun  ? (
        <div>
          <p>When the code is run,</p>
          <p>the test cases' output will be shown here</p>
        </div>
      ) : (
        <p>You must first run the code</p>
      )}
    </div>
  );
};

export default TestresultPanel;
