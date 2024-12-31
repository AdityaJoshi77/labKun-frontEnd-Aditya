import Description from "../components/description";
import CodeEditor from "../components/CodeEditor";

const Editor: React.FC = () => {
  return (
    <div className="h-screen bg-gray-900 text-white flex flex-row p-4 gap-4">
      <Description />
      <div className="flex-1 resize-x">
        <CodeEditor />
      </div>
    </div>
  );
};

export default Editor;
