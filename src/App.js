import { ColorModeContext,useMode } from "./theme";
import { CssBaseline,ThemeProvider } from "@mui/material";
import { Routes,Route } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/global/sidebar";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
//import reSize from "./components/resizable";
//import gridLayout from "./scenes/layout/GridLayout";

function App() {
       const[theme,colorMode]=useMode();
  return (
       <ColorModeContext.Provider value={colorMode}>
           <ThemeProvider theme={theme}>
            <CssBaseline/>
             <div className="app">
               <Sidebar/>
               <main className="content">
                <Routes>
                  <Route path="/" element={<Dashboard/>} />
                  <Route path="/bar" element={<Bar/>} />
                  <Route path="/pie" element={<Pie/>} />
                  <Route path="/line" element={<Line/>} />
                  {/* <Route path="/GridLayout" element={<gridLayout/>} />
                  <Route path="/resizable" element={<reSize/>} /> */}
                </Routes>
              </main> 
             </div>
           </ThemeProvider>   
       </ColorModeContext.Provider>
    
  );
}

export default App;
