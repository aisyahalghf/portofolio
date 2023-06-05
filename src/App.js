import Navbar from "./componen/Navbar";
import LandingPage from "./pages/LandingPage";
import Resume from "./pages/Resume";
import Project from "./pages/Project";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import { useState, useContext, createContext, useMemo } from "react";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function MyApp() {
  const colorMode = useContext(ColorModeContext);
  const [mode, setMode] = useState("light");
  const handleClick = (e) => {
    if (e === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }

    colorMode.toggleColorMode();
  };

  return (
    <>
      <Box
        sx={{
          bgcolor: "background.paper",
          color: "text.secondary",
        }}
      >
        <Navbar handleClick={handleClick} />
        <Routes>
          <Route path="/" element={<LandingPage mode={mode} />} />
          <Route path="/resume" element={<Resume mode={mode} />} />
          <Route path="/project" element={<Project mode={mode} />} />
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/contact" element={<Contact mode={mode} />} />
        </Routes>
      </Box>
    </>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MyApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
