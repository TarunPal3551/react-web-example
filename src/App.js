import './styles/App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
        <Route exact path='/' element={<ShopPage/>}/>
       </Routes>
      </Router>

    </div>
  );
}

export default App;
