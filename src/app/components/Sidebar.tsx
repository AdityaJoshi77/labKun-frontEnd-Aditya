import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane, faBook, faClipboard, faComments } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-6">
      <h2 className="text-lg font-semibold mb-10">Virtual-Labs</h2>
      <ul className="space-y-6">
        <li>
          <a href="#" className="flex items-center space-x-3 py-2 px-4 rounded hover:bg-gray-700">
            <FontAwesomeIcon icon={faPlane} className="h-5 w-5 text-gray-400" />
            <span>Playground</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center space-x-3 py-2 px-4 rounded hover:bg-gray-700">
            <FontAwesomeIcon icon={faBook} className="h-5 w-5 text-gray-400"/>
            <span>Previous Semesters</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center space-x-3 py-2 px-4 rounded hover:bg-gray-700">
            <FontAwesomeIcon icon={faClipboard} className="h-5 w-5 text-gray-400"/>
            <span>Previous Tests</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center space-x-3 py-2 px-4 rounded hover:bg-gray-700">
            <FontAwesomeIcon icon={faComments} className="h-5 w-5 text-gray-400"/>
            <span>Discussion Panel</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
