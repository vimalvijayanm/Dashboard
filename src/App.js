import { ColorModeContext,useMode } from "./theme";
import { CssBaseline,ThemeProvider } from "@mui/material";
import { Routes,Route } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/global/sidebar";



function App() {
  return (
       <ColorModeContext.Provider value={colorMode}>
        
       </ColorModeContext.Provider>
    
  );
}

export default App;
