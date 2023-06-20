import { Stack, Typography } from "@mui/material";
import logo from "../../assets/images/logo.png";

const LoginHeader = () => {
  return (
    <Stack
      direction="column"
      spacing={4}
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        direction="column"
        spacing={0.5}
        alignItems="center"
        justifyContent="center"
      >
        <img src={logo} alt="Logo" style={{ width: '75%' }} />
        <Typography
          sx={{
            fontFamily: "Roobert TWHINT",
            color: "#003A41",
            fontWeight: 600,
            fontSize: "24px",
            textAlign: "center",
            letterSpacing: "-0.025em",
            maxWidth: "80px",
            lineHeight: "100%",
            textTransform: 'uppercase'
          }}
        >
          Movies Site
        </Typography>
      </Stack>

      <Stack
        direction="column"
        spacing={0.5}
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          sx={{ color: "#263334", fontWeight: 700, fontSize: "22px" }}
        >
          ورود
        </Typography>
        <Typography
          sx={{
            color: "#ABABAB",
            fontSize: "12px",
            fontWeight: 500,
            whiteSpace: "nowrap",
          }}
        >
          .برای ورود به سامانه ایمیل و رمز خود را وارد کنید
        </Typography>
      </Stack>
    </Stack>
  );
};

export default LoginHeader;
