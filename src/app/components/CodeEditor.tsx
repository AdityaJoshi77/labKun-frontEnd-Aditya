
"use client";

import { useRef, useState, useEffect } from "react";
import { Editor, OnMount } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS, LANGUAGE_VERSIONS } from "../constants/constants";

const CodeEditor: React.FC = () => {
    
  const editorRef = useRef<any>(null); 
  const [language, setLanguage] = useState<keyof typeof LANGUAGE_VERSIONS>("javascript");
  const [value, setValue] = useState<string>("");

  const onSelect = (language: keyof typeof LANGUAGE_VERSIONS) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language] || "");
  };

  const onMount: OnMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const handleRun = () => {
    console.log("Run clicked");
    const code = editorRef.current.getValue();
    console.log(code);
  };

  const handleSubmit = () => {
    console.log("Submit clicked");
    const code = editorRef.current.getValue();
    console.log(code);
  };



  return (
    <div className="flex flex-col w-full h-full">
    <div className="flex items-center h-auto justify-between bg-gray-800 px-4 py-3 rounded-t-md">
      
      <div className="flex items-center gap-2">
        <h1 className=" text-gray-200 text-lg font-bold">Code Editor</h1>
        <LanguageSelector language={language} onSelect={onSelect} />
      </div>
      
      <div className="flex gap-2">
          {/* Run Button */}
          <button
            onClick={handleRun}
            className="bg-green-600 text-white px-4 py-1 rounded-md hover:bg-green-500"
          >
            Run
          </button>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-500"
          >
            Submit
          </button>
      </div>
        </div>
     
     
          <Editor
            height='calc(100vh - 64px)'
            theme="vs-dark"
            language={language}
            defaultValue="// Start coding here..."
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value || "")} // Update state with editor value
            className="rounded-md shadow-md border border-gray-700"
          />

          
        </div>
  );
};

export default CodeEditor;




