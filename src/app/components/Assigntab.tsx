
import { FaBookBookmark } from "react-icons/fa6";

interface AssigntabProps{
  title:string;
  description:string;
}

const Assigntab = ({title, description}: AssigntabProps) => {
  return (
    <div className = "flex items-center border mt-2 border-gray-700 rounded-md w-full cursor-pointer overflow-hidden transform transition-all duration-270 hover:scale-105 hover:shadow-2xl">.
      <FaBookBookmark className='m-1' size = {20}/>
      <div className = "ml-1">
        <p className = "font-semibold">{title}:</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Assigntab