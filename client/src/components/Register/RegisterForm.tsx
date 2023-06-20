import { TextField, Stack, Button, Link, Box } from "@mui/material";
import { useState } from "react";
import { Register } from "../../services/Auth";
import { useNavigate } from "react-router";

const RegisterForm = () => {
  const [user, setUser] = useState({ email: '', name: '', password: '' });
  const navigate = useNavigate()

  const onSubmit = () => {
    Register(user.email, user.name, user.password).finally(() => {
      navigate("/login")
    })
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
          type="email"
          name="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          sx={{
            width: "100%",
          }}
        />
        <TextField
          placeholder="نام و نام خانوادگی"
          value={user.name}
          type="text"
          name="name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          sx={{
            width: "100%",
          }}
        />
        <TextField
          placeholder="رمز عبور"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          type="password"
          name="password"
          sx={{ width: "100%" }}
        />
        <Box sx={{ width: 1, textAlign: "right" }}>
          <Link href="/login">از قبل عضو شده اید؟</Link>
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
          onClick={onSubmit}
        >
          عضویت
        </Button>
      </Stack>
    </>
  );
};

export default RegisterForm;
