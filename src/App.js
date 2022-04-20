import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import MainBanner from './components/mainbanner';
import Services from './components/services';
function App() {
  return (
    <div className="App">
      <Navbar />
      <MainBanner />
      <Services />
    </div>
  );
}

export default App;
