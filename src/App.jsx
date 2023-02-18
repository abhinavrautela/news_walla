import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import NavContentProvider from "./Contexts/NavContext";
import HomePage from "./Pages/Home.Page";
import SportsPage from "./Pages/Sports.page";
import WeatherPage from "./Pages/Weather.Page";
function App() {
  return (
    <div>
      <NavContentProvider>
        <Navbar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/news/weather" element={<WeatherPage />} />
          <Route path="/news/sports" element={<SportsPage />} />
          <Route />
        </Routes>
      </NavContentProvider>
    </div>
  );
}

export default App;
