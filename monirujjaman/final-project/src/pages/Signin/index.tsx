import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
// import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Notification, { NotificationType } from "../../Notification";
import { useUserDispatch } from "../../store/action-dispatchs";
import { GetMyInfoAsync, SignInUserAsync } from "../../utilis/API/Auth";
import { UserSigninDto } from "../../utilis/DTOs/User";

type Inputs = {
  email: string;
  password: string;
};

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const { ClearUserInfo, SetUserInfo } = useUserDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    var userSigninInfo: UserSigninDto = {
      email: data.email,
      password: data.password,
    };

    const userInfo = await SignInUserAsync(userSigninInfo);

    if (userInfo !== undefined) {
      const userBasicInfo = await GetMyInfoAsync(userInfo.token);
      Notification(NotificationType.success, "LOGIN SUCCESS");
      SetUserInfo({
        expireDate: new Date(userInfo.expire_at * 1000),
        authorized: true,
        role: userInfo.role,
        token: userInfo.token,
        user: userBasicInfo,
      });
      if (userInfo.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/user");
      }
    } else {
      Notification(NotificationType.error, "LOGIN FAILED");
    }
  };

  React.useEffect(() => {
    ClearUserInfo();
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
          minWidth="350px"
        >
          <TextField
            margin="normal"
            error={errors.email ? true : false}
            fullWidth
            type={"email"}
            id="email"
            label="Email Address"
            autoComplete="email"
            autoFocus
            {...register("email", { required: "Please provide email." })}
          />
          <Typography color={"red"}>{errors.email?.message}</Typography>
          <TextField
            margin="normal"
            error={errors.password ? true : false}
            fullWidth
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            {...register("password", {
              required: "Please provide password.",
              minLength: {
                value: 6,
                message: "Min password langth is 6",
              },
            })}
          />
          <Typography color={"red"}>{errors.password?.message}</Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/signup">{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
