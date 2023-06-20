import { TextField, Stack, Button, Link, Box } from "@mui/material";
import { useState } from "react";
import { Login } from "../../services/Auth";
import { useNavigate } from "react-router";

const LoginForm = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const navigate = useNavigate()

  const handleLogin = () => {
    Login(user.email, user.password).then((res: any) => {
      localStorage.setItem("accessToken", res.data.token);
    }).finally(() => navigate("/"))
  }
  return (
    <>
      <Stack
        direction="column"
        spacing={1.5}
        justifyContent="center"
        alignItems="center"
        mt={3}
        sx={{ width: 1, boxSizing: "border-box" }}
      >
        <TextField
          placeholder="ایمیل"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          sx={{
            width: "100%",
          }}
        />
        <TextField
          placeholder="رمز عبور"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          type="password"
          sx={{ width: "100%", textAlign: 'right' }}
        />
        <Box sx={{ width: 1, textAlign: "right" }}>
          <Link href="/register">در سامانه عضو نیستید؟</Link>
        </Box>
      </Stack>
      <Stack direction="row" justifyContent="center" alignItems="center" mt={4}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            color: "#fff",
            borderRadius: "25px",
            textAlign: "center",
            boxShadow: "unset !important",
            fontSize: "16px",
            fontWeight: 700,
            width: "105px",
            height: "50px",
            alignItems: "center",
          }}
          onClick={handleLogin}
        >
          ورود
        </Button>
      </Stack>
    </>
  );
};

export default LoginForm;
