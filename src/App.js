import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <div className="container mx-auto ">
        <Main/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
