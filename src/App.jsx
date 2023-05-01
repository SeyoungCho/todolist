import { useState } from "react";
import ToggleSwitch from "./Components/ToggleSwitch";
import { ThemeContext } from "./contexts/ThemeContext";
import { useMediaQuery } from "react-responsive";

function App() {
  const [theme, setTheme] = useState("light");
  const isMobile = useMediaQuery({ query: "(max-width: 430px)" });

  const handleChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={{ theme }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "column",
          margin: "0 auto",
          width: "200px",
          height: "400px",
          marginTop: "66px",
          backgroundColor: theme === "light" ? "#ECECF1" : "#36393B",
          borderRadius: "16px",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            marginBottom: "66px",
            color: theme === "light" ? "#575F6B" : "#F8F8F8",
          }}
        >
          Todo List
        </h1>
        <ToggleSwitch
          checked={theme === "light"}
          onChange={handleChange}
          isMobile={isMobile}
        />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
