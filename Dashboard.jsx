import React, { useContext } from "react";
import Header from "../components/Header";
import { AuthContext } from "../context/AuthContext";

function Dashboard({ tasks, updateStatus }) {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Header />

      <h2>
        {user?.role === "admin" ? "Admin Dashboard" : "Dashboard"}
      </h2>

      {tasks.map(task => (
        <div
          key={task.id}
          style={{
            border: "1px solid #8e8383ff",
            margin: 10,
            padding: 10
          }}
        >
          <p>
            <b>{task.title}</b>
          </p>

          {/* CUSTOMER VIEW (READ ONLY) */}
          {user?.role !== "admin" && (
            <p>Status: {task.status}</p>
          )}

          {/* ADMIN CONTROL */}
          {user?.role === "admin" && (
            <>
              <label>Status: </label>
              <select
                value={task.status}
                onChange={(e) =>
                  updateStatus(task.id, e.target.value)
                }
              >
                <option value="pending">Pending</option>
                <option value="in process">In Process</option>
                <option value="completed">Completed</option>
              </select>
            </>
          )}
        </div>
      ))}
    </>
  );
}

export default Dashboard;
