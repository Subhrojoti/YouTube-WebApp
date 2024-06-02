import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import SearchResultPage from "./pages/SearchResultPage";
import VideoDetailsPage from "./pages/VideoDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-full">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route
            path="/searchResult/:searchQuery"
            element={<SearchResultPage />}
          />
          <Route path="/video/:videoId" element={<VideoDetailsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
