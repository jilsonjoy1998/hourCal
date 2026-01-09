import React, { useState } from "react";

// Convert HH:MM → minutes
const timeToMinutes = (time) => {
  if (!time) return 0;
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

// Convert minutes → HH:MM
const minutesToTime = (minutes) => {
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hrs.toString().padStart(2, "0")}:${mins
    .toString()
    .padStart(2, "0")}`;
};

function App() {
  const [times, setTimes] = useState([""]);

  const handleChange = (index, value) => {
    const updatedTimes = [...times];
    updatedTimes[index] = value;
    setTimes(updatedTimes);
  };

  const addTimeField = () => {
    setTimes([...times, ""]);
  };

  const totalMinutes = times.reduce(
    (sum, time) => sum + timeToMinutes(time),
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Multiple Time Calculator</h2>

      {times.map((time, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <input
            type="time"
            value={time}
            onChange={(e) => handleChange(index, e.target.value)}
          />
        </div>
      ))}

      <button onClick={addTimeField}>Add Time</button>

      <h3 style={{ marginTop: "20px" }}>
        Total Time: {minutesToTime(totalMinutes)}
      </h3>
    </div>
  );
}

export default App;
