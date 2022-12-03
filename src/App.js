import './boot.css'
// import "./boot_icon.css"
// import "./boot"
import Header from './components/Header';
import Footer from './components/Footer';
// import {API_URL, API_KEY} from "./config"
import Shop from './components/Shop';
import './App.css';
import {ToastContainer} from "react-toastify"

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <Shop />
      <Footer />
    </>
  );
}

export default App;