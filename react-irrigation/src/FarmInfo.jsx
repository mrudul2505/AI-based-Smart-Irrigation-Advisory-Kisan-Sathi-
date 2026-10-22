import { useState } from 'react';

function FarmInfo(props) {
  const [moisture, setMoisture] = useState(props.initialMoisture);

  function addWater() {
    if (moisture < 100) {
      setMoisture(moisture + 5);
    }
  }

  return (
    <div className="card">
      <h2>Farm Details</h2>
      <p>Farmer: {props.farmer}</p>
      <p>Crop: {props.crop}</p>
      <p>Plot ID: {props.plot}</p>
      <p>Soil Moisture: {moisture}%</p>
      <p>Demo advice: {moisture < 60
        ? 'Irrigation is needed.' : 'Soil has enough moisture.'}</p>
      <button onClick={addWater} disabled={moisture === 100}>
        Add Water
      </button>
    </div>
  );
}

export default FarmInfo;
