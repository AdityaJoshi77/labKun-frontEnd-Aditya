import { useRouter } from "next/navigation";
interface CardProps {
    title: string;
    description: string;
    image: string;
    redirectPath: string;
  }
  
  interface User {
    name: string;
    semester: string;
    classes: Class[];
  }

  interface Class {
    title: string;
    description: string;
    image: string;
  }

  const Card = ({ title, description, image, redirectPath }: CardProps) => {
    const router = useRouter();

    const handleClick = () => {
      router.push(redirectPath);
    }
    return (
      <div onClick={handleClick} 
      className="bg-white shadow-lg rounded-lg overflow-hidden relative p-4  min-h-[300px] cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <img src={`/images/${image}`} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
        <div className="absolute bottom-4 left-4 text-black">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    );
  };
  
  export default Card;
  