import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import SearchResultPage from "./pages/SearchResultPage";
import VideoDetailsPage from "./pages/VideoDetailsPage";
import WatchListPage from "./pages/WatchListPage";
import Sidebar from "./Components/SideBar/Sidebar";
import { store } from "./Redux/Store.js";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="flex flex-col h-full w-[100%] 2xl:w-[1536px] mx-auto">
          <Navbar />
          <div className="flex flex-row h-[calc(100%-60px)]">
            <Sidebar />
            <Routes>
              <Route path="/" exact element={<HomePage />} />
              <Route
                path="/searchResult/:searchTerm"
                element={<SearchResultPage />}
              />
              <Route path="/video/:videoId" element={<VideoDetailsPage />} />
              <Route path="/watchlist" element={<WatchListPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
