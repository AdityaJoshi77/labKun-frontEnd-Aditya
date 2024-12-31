"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";


import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Spinner from "../components/Spinner";


interface Class {
  title: string;
  description: string;
  image: string;
}

interface User {
  name: string;
  semester: string;
  classes: Class[];
}


const Dashboard = () => {

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {

      setLoading(true);
      try {
        
        const mock = {
          name: "User1",
          semester: "1",
          classes: [
            {
              title: "IOT",
              description: "Explore Internet of things",
              image: "/iot.webp",
            },
            {
              title: "IOT",
              description: "Explore Internet of things",
              image: "/iot.webp",
            },
            {
              title: "IOT",
              description: "Explore Internet of things",
              image: "/iot.webp",
            },
            {
              title: "IOT",
              description: "Explore Internet of things",
              image: "/iot.webp",
            },
          ],
        };

        setUser(mock);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally{
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="flex">
    <Sidebar />
      {loading || !user ? (
        <Spinner />
      ) : (
      <main className="flex-grow bg-gray-100 p-8">
        <header className="mb-8">
          <h1 className="text-2xl font-bold">
            Welcome back, <span className="text-blue-600">{user.name}</span>
          </h1>
          <p className="text-gray-500">Sem {user.semester}</p>
        </header>
        <section className="grid grid-cols-2 gap-8">
          {user.classes.length > 0 ? (
            user.classes.map((classItem, index) => (
              <Card
                key={index}
                title={classItem.title}
                description={classItem.description}
                image={classItem.image}
                redirectPath={`/subject?title=${encodeURIComponent(classItem.title)}`}
              />
            ))
          ) : (
            <p>No classes found</p>
          )}
        </section>
      </main>
      )}
    </div>
  );
};

export default Dashboard;
