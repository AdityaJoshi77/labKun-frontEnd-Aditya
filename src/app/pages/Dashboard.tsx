"use client";
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Spinner from "../components/Spinner";

// Define the Class interface
interface Class {
  title: string;
  description: string;
  image: string;
}

// Define the User interface
interface User {
  name: string;
  semester: string;
  classes: Class[];
}

const Dashboard = () => {
  // State to store user data
  const [user, setUser] = useState<User | null>(null);

  // State to manage loading status
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch user data
    const fetchUser = async () => {
      setLoading(true);
      try {
        // Mock data simulating an API response
        const mockUser: User = {
          name: "User1",
          semester: "1",
          classes: [
            {
              title: "IoT",
              description: "Explore Internet of Things",
              image: "/iot.webp",
            },
            {
              title: "Iot",
              description: "Explore Internet of Things",
              image: "/iot.webp",
            },
            {
              title: "Iot",
              description: "Explore Internet of Things",
              image: "/iot.webp",
            },
            {
              title: "Iot",
              description: "Explore Internet of Things",
              image: "/iot.webp",
            },
          ],
        };

        setUser(mockUser);
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Fallback user data in case of an error
        setUser({
          name: "Not Available",
          semester: "N/A",
          classes: [],
        });
      } finally {
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
            <p className="text-gray-500 italic">Semester {user.semester}</p>
          </header>
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {user.classes.length > 0 ? (
              user.classes.map((classItem, index) => (
                <Card
                  key={index}
                  title={classItem.title}
                  description={classItem.description}
                  image={classItem.image}
                />
              ))
            ) : (
              <p className="text-gray-500">No classes available</p>
            )}
          </section>
        </main>
      )}
    </div>
  );
  
};

export default Dashboard;
