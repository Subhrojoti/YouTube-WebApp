import React from "react";
import Card from "./Card";
import { dummyData } from "../DummyData/dummyData";

const Home = () => {
  return (
    <>
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        {dummyData.map((items, k) => (
          <Card key={k} />
        ))}
      </div>
    </>
  );
};

export default Home;
