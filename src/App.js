import Home from './components/Home.jsx';
import Navbar from './shared/Navbar.jsx'

function App() {
  return (
    <div className='overflow-x-hidden font-nexa text-sm scroll-smooth'>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
