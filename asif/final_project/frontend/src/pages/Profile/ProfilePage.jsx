import { Button } from "@mui/material";
import React from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./profile_page_styles.css";
const ProfilePage = () => {
  const { user_reducer } = useSelector((store) => store);
  const { name, image, email, number, status } = user_reducer.user;
  const navigate = useNavigate();
  return (
    <div className="profile">
      <div className="first">
        <div className="image">
          <img alt={name} src={image} />
        </div>
        <Button
          onClick={() => navigate("/edit-profile")}
          variant="contained"
          color="info"
        >
          Edit Profile
        </Button>
      </div>
      <div className="profile-info">
        <h3>{name}</h3>
        <p>Email : {email}</p>
        <p>Mobile Number : {number}</p>
        <p>You are {status} to add cart or order in this shop!</p>
      </div>
    </div>
  );
};

export default ProfilePage;
