/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "semantic-ui-react";
import { ActivityType } from "./types/types";

function App() {
  const [count, setCount] = useState(0);
  const [activities, setActivities] = useState<ActivityType[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("https://localhost:7232");
        setActivities(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div>
        <Header as="h1" icons={"users"}>
          First Header
        </Header>
        {activities.map((item) => {
          return <div key={item.id}>{item.title}</div>;
        })}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
