import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/light";
import routes from "./routes";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
  const element = useRoutes(routes);
  return (
    //<CacheProvider value={cacheRtl}>
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
    //</CacheProvider>
  );
}

export default App;
