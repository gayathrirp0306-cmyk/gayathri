import React, { useState } from "react";
import Header from "./Header";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const submit = (e) => {
    e.preventDefault();
    addTask({
      id: Date.now(),
      title,
      description,
      location,
      status: "Pending",
      worker: "Not Assigned"
    });
    setTitle("");
    setDescription("");
    setLocation("");
  };

  return (
    <>
      <Header />
      <form onSubmit={submit}>
        <h2>Add Task</h2>

        <input placeholder="Title" value={title}
          onChange={(e) => setTitle(e.target.value)} /><br /><br />

        <input placeholder="Description" value={description}
          onChange={(e) => setDescription(e.target.value)} /><br /><br />

        <input placeholder="Location" value={location}
          onChange={(e) => setLocation(e.target.value)} /><br /><br />

        <button>Add</button>
      </form>
    </>
  );
}

export default TaskForm;
