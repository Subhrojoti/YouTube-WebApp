import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="container mx-auto px-4 ">
      <Navbar />
      {/* conditionally render different pages using react router dom */}
      <HomePage />
    </div>
  );
}

export default App;
