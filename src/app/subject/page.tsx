"use client";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import Assigntab from "../components/Assigntab";
import Spinner from "../components/Spinner";
import { useSearchParams } from "next/navigation";

interface AssigntabProps {
  title: string;
  description: string;
}

interface User {
  name: string;
  semester: string;
  classes: [];
}

interface Topic {
  title: string;
  description: string;
  image: string;
  assignments: AssigntabProps[];
}

const Subject = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "Default Title";
  const [user, setUser] = useState<User>({
    name: "User1",
    semester: "1",
    classes: [],
  });

  const [topic, setTopic] = useState<Topic>({
    title: "Loading...",
    description: "Please wait while we load the subject details.",
    image: "/images/iot.webp", // Placeholder image
    assignments: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubject = async () => {
      setLoading(true);
      try {
        const mock = {
          title: "IoT",
          description: "Let's build cool machines",
          image: "/images/iot.webp",
          assignments: [
            { title: "Add two numbers", description: "I will add two numbers" },
            { title: "Subtract two numbers", description: "I will subtract two numbers" },
            { title: "Multiply two numbers", description: "I will multiply two numbers" },
            { title: "Divide two numbers", description: "I will divide two numbers" },
          ],
        };

        setTopic(mock);
      } catch (error) {
        console.error("Error fetching assignment data", error);
        setTopic({
          title: "Error loading topic",
          description: "Unable to load subject details at this time.",
          image: "/images/iot.webp", // Fallback error image
          assignments: [],
        });
      } finally {
        setLoading(false);
      }
    };

    fetchSubject();
  }, []);

  return (
    <main className="flex">
      <Sidebar />
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col flex-grow items-center">
          {/* Welcome Header */}
          <div className="flex flex-col w-11/12 mx-auto items-start">
            <h1 className="text-xl mt-5 font-bold">
              Welcome to the {topic.title} Lab,{" "}
              <span className="font-bold text-blue-600">{user.name}</span>
            </h1>
            <h2 className="text-gray-500 italic">Sem {user.semester}</h2>
          </div>

          {/* Subject Details */}
          <div className="flex flex-col w-full mx-auto mt-3">
            {/* Subject Image */}
            <img
              src={topic.image}
              alt={topic.title}
              className="w-11/12 h-48 object-cover rounded-lg mx-auto mb-4 border-4 border-black shadow-2xl"
            />

            {/* Assignment Tabs */}
            <div className="flex flex-col w-11/12 mx-auto">
              {topic.assignments.length === 0 ? (
                <p className="text-gray-600 italic">There are no assignments for this subject.</p>
              ) : (
                topic.assignments.map((assign, index) => (
                  <Assigntab key={index} title={assign.title} description={assign.description} />
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Subject;

