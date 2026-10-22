function Farms() {
  const farms = [
    { id: 1, crop: "Sugarcane", moisture: 40 },
    { id: 2, crop: "Wheat", moisture: 65 },
    { id: 3, crop: "Tomato", moisture: 55 }
  ];
  return (
    <div>
      <h2>Farm List</h2>
      {farms.map(farm => (
        <p key={farm.id}>
          Farm {farm.id} - {farm.crop}: {farm.moisture}% moisture
        </p>
      ))}
      <p>These are sample values, not live sensor readings.</p>
    </div>
  );
}
export default Farms;
