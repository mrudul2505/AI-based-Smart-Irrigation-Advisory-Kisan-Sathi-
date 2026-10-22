import FarmInfo from './FarmInfo.jsx';
import './App.css';

function App() {
  return (
    <div>
      <h1>KisanSaathi</h1>
      <h2>Smart Irrigation Demo</h2>
      <FarmInfo farmer="Ramesh Patil" crop="Sugarcane"
        plot="PLOT-A" initialMoisture={40} />
      <p>Sample values for a React lab experiment.</p>
    </div>
  );
}

export default App;
