import LandingPage from './pages/LandingPage';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="dark:bg-black">
        <LandingPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
