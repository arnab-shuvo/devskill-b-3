import { Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { user_signup } from "../../../store/thunks/user_thunks";
import FileBase from "react-file-base64";
import "./signup_styles.css";
const Signup = () => {
  const [data, setData] = useState({
    name: "",
    image: "",
    email: "",
    password: "",
    confirm_password: "",
    number: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const on_field_change = (e) =>
    setData((prev_data) => ({ ...prev_data, [e.target.name]: e.target.value }));

  return (
    <div className="signup-container">
      <h1>Signup</h1>
      <form onSubmit={(e) => dispatch(user_signup(e, data, navigate))}>
        <div>
          <label for="name">Name</label>
          <input
            onChange={on_field_change}
            name="name"
            type="text"
            value={data.name}
          />
        </div>
        <div>
          <label for="image">Image</label>
          <FileBase
            type="file"
            name="image"
            multiple="false"
            onDone={(li) =>
              setData((prev_data) => ({ ...prev_data, image: li[0].base64 }))
            }
          />
        </div>
        <div>
          <label for="email">Email</label>
          <input
            onChange={on_field_change}
            name="email"
            type="email"
            value={data.email}
          />
        </div>
        <div>
          <label for="password">Password</label>
          <input
            onChange={on_field_change}
            name="password"
            type="password"
            value={data.password}
          />
        </div>
        <div>
          <label for="confirm_password">Confirm Password</label>
          <input
            onChange={on_field_change}
            name="confirm_password"
            type="password"
            value={data.confirm_password}
          />
        </div>
        <div>
          <label for="number">Number</label>
          <input
            onChange={on_field_change}
            name="number"
            type="text"
            value={data.number}
          />
        </div>
        <Button type="submit" color="primary" variant="contained">
          Signup
        </Button>
        <div className="oauth-section">
          <p>Signup with</p>
          <div className="oauth-option-container">
            <IconButton className="icon-button">
              <FcGoogle />
            </IconButton>
            <p>or</p>
            <IconButton className="icon-button">
              <AiFillGithub />
            </IconButton>
          </div>
        </div>
        <p onClick={() => navigate("/login")}>Already have an account?</p>
      </form>
    </div>
  );
};

export default Signup;
