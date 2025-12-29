import React from "react";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div style={{ width: "350px", margin: "100px auto", textAlign: "center" }}>
      <h2>Worker Sign In</h2>

      <input placeholder="Name" /><br /><br />
      <input placeholder="Date of Birth" /><br /><br />
      <input placeholder="Phone Number" /><br /><br />
      <input placeholder="Address" /><br /><br />
      <input placeholder="Email" /><br /><br />

      <button>Register</button>

      <p style={{ marginTop: "20px" }}>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default SignIn;
