import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TasksPage from "./pages/TasksPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

import tasksData from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState(tasksData);

  const addTask = (task) => setTasks([...tasks, task]);

  const updateStatus = (id, status) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, status } : t));
  };

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          {/* ✅ ONLY THIS LINE ADDED */}
          <Route path="/" element={<Login />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />

          <Route
            path="/tasks"
            element={
              <ProtectedRoute>
                <TaskList tasks={tasks} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/add"
            element={
              <ProtectedRoute>
                <TaskForm addTask={addTask} />
              </ProtectedRoute>
            }
          />

          <Route 
            path="/dashboard" element={
              <ProtectedRoute>
                  <Dashboard tasks={tasks}
                   updateStatus={updateStatus}/>
              </ProtectedRoute>
            } 
          />


          <Route
            path="/tasks/:id"
            element={
              <ProtectedRoute>
                <TasksPage tasks={tasks} updateStatus={updateStatus} />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Login />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
