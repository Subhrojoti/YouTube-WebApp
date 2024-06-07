import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import SearchResultPage from "./pages/SearchResultPage";
import VideoDetailsPage from "./pages/VideoDetailsPage";
import WatchListPage from "./pages/WatchListPage";
import Sidebar from "./Components/SideBar/Sidebar";
import { store, persistor } from "./Redux/Store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import ChannelPage from "./pages/ChannelPage";

import SignUpPage from "./pages/SignUpPage";

const Container = () => {
  return (
    <div className="flex flex-col h-full w-[100%] 2xl:w-[1536px] mx-auto">
      <Navbar />
      <div className="flex flex-row h-[calc(100%-60px)]">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

const AuthRoute = () => {
  let token = localStorage.getItem("token");
  let navigate = useNavigate();
  if (token) {
    return <Outlet />;
  } else navigate("/signUp");
};
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          {/* <div className="flex flex-col h-full w-[100%] 2xl:w-[1536px] mx-auto">
            <Navbar />
            <div className="flex flex-row h-[calc(100%-60px)]">
              <Sidebar /> */}
          <Routes>
            <Route path="/signUp" element={<SignUpPage />} />
            <Route element={<Container />}>
              <Route path="/" exact element={<HomePage />} />
              <Route
                path="/searchResult/:searchTerm"
                element={<SearchResultPage />}
              />
              <Route path="/video/:videoId" element={<VideoDetailsPage />} />
              <Route path="/watchList" element={<AuthRoute />}>
                <Route path="/watchList" element={<WatchListPage />} />
                <Route path="/channel" element={<ChannelPage />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
