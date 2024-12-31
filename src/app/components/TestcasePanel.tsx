import React from 'react'

const TestcasePanel = () => {
  return (
    <main className='flex flex-col'>
        {/* array of test cases */}
        <div className="flex flex-row justify-around">
            {/* this div has many buttons, which put a test case in the div below : */}
            <button>Case 1</button>
            <button>Case 2</button>
            <button>Case 3</button>
        </div>

        {/* test input holder */}
        <div className="">

        </div>
    </main>
  )
}

export default TestcasePanel

{/* <div class="font-menlo w-full cursor-text rounded-lg border px-3 py-[10px] bg-fill-3 dark:bg-dark-fill-3 border-transparent" spellcheck="false">
            <div data-gramm="false" data-gramm_editor="false" data-enable-grammarly="false" class="font-menlo w-full resize-none whitespace-pre-wrap break-words outline-none placeholder:text-label-4 dark:placeholder:text-dark-label-4 sentry-unmask" data-e2e-locator="console-testcase-input" placeholder="Enter Testcase" autocorrect="off" autocapitalize="off" aria-autocomplete="none" contenteditable="true">[[2,1,3],[6,5,4],[7,8,9]]</div>
        </div> */}