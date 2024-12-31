
import { FaBookBookmark } from "react-icons/fa6";
import {useRouter} from "next/navigation";

interface AssigntabProps{
  title:string;
  description:string;
  redirectPath:string;
}

const Assigntab = ({title, description, redirectPath}: AssigntabProps) => {

  const router = useRouter();

  const handleClick = () => router.push(redirectPath);

  return (
    <div onClick = {handleClick} className = "flex items-center border mt-2 border-gray-700 rounded-md w-full cursor-pointer transition-all hover:scale-105 duration-27 hover:shadow-2xl hover:shadow-blue-950">.
      <FaBookBookmark className='m-1' size = {20}/>
      <div className = "ml-1">
        <p className = "font-semibold">{title}:</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Assigntab