import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Header() {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  return (
    <div style={{ padding: 10, background: "#ff6600ff" }}>
      <button onClick={() => navigate(-1)}>⬅ Back</button>
      <button
        onClick={() => {
          logout();
          navigate("/login");
        }}
        style={{ float: "right" }}
      >
        Logout
      </button>
    </div>
  );
}

export default Header;
