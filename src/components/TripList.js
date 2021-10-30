import { useState, useEffect } from 'react';

// styles
import './TripList.css';

export default function TripList() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/trips')
      .then((res) => res.json())
      .then((json) => setTrips(json));
  }, []);

  console.log(trips);

  return (
    <div className='trip-list'>
      <h2>Trip List</h2>
      <ul>
        {trips.map((trip) => (
          <li key={trip.id}>
            <h3>{trip.title}</h3>
            <span>{trip.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
