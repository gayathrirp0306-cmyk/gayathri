import React from "react";
import Header from "./Header";
import TopBar from "./TopBar";

function TaskList({ tasks }) {
  return (
    <>
      <Header />
      <TopBar />

      <h2>Tasks</h2>

      {tasks.map((t) => (
        <div
          key={t.id}
          style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}
        >
          <p><b>{t.title}</b></p>
          <p>Status: {t.status}</p>

          {/* ❌ NO edit / change option here */}
        </div>
      ))}
    </>
  );
}

export default TaskList;
