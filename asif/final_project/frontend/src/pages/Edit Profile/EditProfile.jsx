import { Button } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { user_update } from "../../store/thunks/user_thunks";
import "./edit_profile_styles.css";
const EditProfile = () => {
  const { user } = useSelector((store) => store.user_reducer);
  const { id, name, email, number } = user;
  const dispatch = useDispatch();
  const [data, setData] = useState({
    id,
    name,

    email,
    number,
  });

  const on_field_change = (e) =>
    setData((prev_data) => ({ ...prev_data, [e.target.name]: e.target.value }));

  return (
    <div className="edit-profile">
      <h1>Edit Your Information</h1>
      <form onSubmit={(e) => dispatch(user_update(e, data))}>
        <div>
          <label for="name">Name</label>
          <input
            name="name"
            type="text"
            value={data.name}
            onChange={on_field_change}
          />
        </div>
        <div>
          <label for="email">Email</label>
          <input
            name="email"
            type="email"
            value={data.email}
            onChange={on_field_change}
          />
        </div>
        <div>
          <label for="number">Number</label>
          <input
            name="number"
            type="text"
            value={data.number}
            onChange={on_field_change}
          />
        </div>
        <Button type="submit" color="primary" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default EditProfile;
