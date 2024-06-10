import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ColorModeProvider, CSSReset } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";

function App() {
  return (
    <ColorModeProvider>
      <CSSReset />
      <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
        </Routes>
      </Router>
    </ColorModeProvider>
  );
}

export default App;
