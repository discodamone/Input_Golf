import { GameContext } from "./GameState";
import React, { useContext } from "react";

export default function CourseList({ updateRenderedComponent }) {
  return (
    <div className="courseList">
      <h1>Course List</h1>
      <button onClick={() => updateRenderedComponent("HoleList")}>Course 1</button>
      <button onClick={() => updateRenderedComponent("HoleList")}>Course 2</button>
      <button onClick={() => updateRenderedComponent(3)}>Course 3</button>
      <button onClick={() => updateRenderedComponent(4)}>Course 4</button>
      <button onClick={() => updateRenderedComponent(5)}>Course 5</button>
    </div>
  );
}
