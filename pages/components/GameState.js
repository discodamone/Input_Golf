import CourseList from "./CourseList";
import HoleList from "./HoleList";
import React, { useReducer, createContext } from "react";

let state = {
  component: "CourseList",
};

export function updateRenderedComponent(comp) {
  state.component = comp;
}

function renderComponent(component) {
  switch (component) {
    case "CourseList":
      return <CourseList updateRenderedComponent={updateRenderedComponent} />;
    case "HoleList":
      return <HoleList updateRenderedComponent={updateRenderedComponent} />;
    default:
      return <CourseList updateRenderedComponent={updateRenderedComponent} />;
  }
}

export default function GameState() {
  return <div>{renderComponent(state.component)}</div>;
}
