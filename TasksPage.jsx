import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

function TasksPage({ tasks, updateStatus }) {
  const { id } = useParams();
  const task = tasks.find(t => t.id === Number(id));

  if (!task) return <p>Task not found</p>;

  return (
    <>
      <Header />
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Location: {task.location}</p>
      <p>Status: {task.status}</p>

      <button onClick={() => updateStatus(task.id, "Completed")}>
        Mark Completed
      </button>
    </>
  );
}

export default TasksPage;
