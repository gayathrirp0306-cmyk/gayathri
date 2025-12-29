import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [role, setRole] = useState("admin");
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [sentOtp, setSentOtp] = useState(null);

  const { loginAdmin, loginCustomer } = useContext(AuthContext);
  const navigate = useNavigate();

  const sendOtp = () => {
    const code = Math.floor(1000 + Math.random() * 9000);
    setSentOtp(code);
    alert(`OTP: ${code}`);
  };

  return (
    /* 🔥 FULL PAGE CENTER WRAPPER */
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(180deg, #980f7dff, #1a0b5e)",
      }}
    >
      {/* 🔥 LOGIN BOX */}
      <div
        style={{
          width: 320,
          padding: 25,
          background: "rgba(0,0,0,0.4)",
          borderRadius: 10,
          color: "#898181ff",
        }}
      >
        <h2>FIELD SERVICE TASK</h2>

        <select
          style={{ width: "100%", marginBottom: 10 }}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="admin">Admin</option>
          <option value="customer">Customer</option>
        </select>

        {role === "admin" && (
          <>
            <input
              placeholder="Admin ID"
              style={{ width: "100%", marginBottom: 10 }}
              onChange={(e) => setAdminId(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              style={{ width: "100%", marginBottom: 10 }}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              style={{ width: "100%" }}
              onClick={() => {
                if (loginAdmin(adminId, password)) navigate("/dashboard");
                else alert("Invalid Admin");
              }}
            >
              Login
            </button>
          </>
        )}

        {role === "customer" && (
          <>
            <input
              placeholder="Name"
              style={{ width: "100%", marginBottom: 10 }}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Phone"
              style={{ width: "100%", marginBottom: 10 }}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button style={{ width: "100%", marginBottom: 10 }} onClick={sendOtp}>
              Send OTP
            </button>
            <input
              placeholder="OTP"
              style={{ width: "100%", marginBottom: 10 }}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button
              style={{ width: "100%" }}
              onClick={() => {
                if (Number(otp) === sentOtp) {
                  loginCustomer(name, phone);
                  navigate("/tasks");
                } else alert("Invalid OTP");
              }}
            >
              Verify
            </button>
          </>
        )}

        <p style={{ marginTop: 15 }}>
          New worker? <Link to="/signin">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
