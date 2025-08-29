import Navbar from "./components/Navbar";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="px-5 py-5">
 <Home />
      </div>
     
    </>
  );
}