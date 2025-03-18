import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./pages/App";
import Manage from "./pages/Manage";

const AppRouter = () => {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/manage" element={<Manage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
