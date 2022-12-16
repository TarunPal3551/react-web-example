import './styles/App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ShopPage from './pages/ShopPage';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D6001B',
    },
    secondary: {
      main: '#D6001B',
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
        <Route exact path='/' element={<ShopPage/>}/>
       </Routes>
      </Router>

    </div>
    </ThemeProvider>
  );
}

export default App;
