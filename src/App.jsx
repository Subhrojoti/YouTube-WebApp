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
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BottomNav from "./Components/BottomNav/BottomNav.jsx";

// container component to wrap around the main div
const Container = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call on initial render

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col h-full w-[100%] 2xl:w-[1536px] mx-auto">
      <Navbar />
      <div className="flex flex-row h-[calc(100%-60px)]">
        <Sidebar />
        <Outlet />
        <div
          className={`fixed bottom-0 left-0 w-full h-12 bg-white shadow-md flex justify-center items-center ${
            isMobile ? "" : "hidden"
          }`}
        >
          <BottomNav />
        </div>
      </div>
    </div>
  );
};

//  auth component to restrict the path for logged in user
const AuthRoute = () => {
  let token = localStorage.getItem("token");
  let navigate = useNavigate();
  useEffect(() => {
    if (!token) navigate("/signUp");
  }, [token, navigate]);
  if (token) {
    return <Outlet />;
  }
};

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/signUp" element={<SignUpPage />} />
            <Route element={<Container />}>
              <Route path="/" exact element={<HomePage />} />
              <Route
                path="/searchResult/:searchTerm"
                element={<SearchResultPage />}
              />
              <Route path="/video/:videoId" element={<VideoDetailsPage />} />
              <Route path="/auth" element={<AuthRoute />}>
                <Route path="/auth/watchList" element={<WatchListPage />} />
                <Route path="/auth/channel" element={<ChannelPage />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </PersistGate>
    </Provider>
  );
}

export default App;
