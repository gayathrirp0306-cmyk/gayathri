import React from "react";
import { Link } from "react-router-dom";

function TopBar() {
  return (
    <nav style={{ margin: 10 }}>
      <Link to="/tasks">Tasks</Link> |{" "}
      <Link to="/add">Add Task</Link> |{" "}
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
}

export default TopBar;
