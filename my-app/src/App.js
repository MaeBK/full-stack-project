import Home from './components/Home';
import Navbar from './components/Navbar';
import Friends from './components/Friends';
import Favorites from './components/Favorites'
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
    <div>
      <Navbar/>
			<Home />
      <Friends/>
      <Favorites/>
      <Footer/>
		</div>
    </div>
  );
}

export default App;
