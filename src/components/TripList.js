import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';

// styles
import './TripList.css';

export default function TripList() {
    const [url, setUrl] = useState('http://localhost:3000/trips');
    const { data: trips } = useFetch(url)


  return (
    <div className='trip-list'>
          <h2>Trip List</h2>
          
      <ul>
        {trips && trips.map((trip) => (
          <li key={trip.id}>
            <h3>{trip.title}</h3>
            <span>{trip.price}</span>
          </li>
        ))}
      </ul>

      <div className='filters'>
        <button
          onClick={() => setUrl('http://localhost:3000/trips?loc=europe')}
        >
          EU trips
        </button>
        <button onClick={() => setUrl('http://localhost:3000/trips')}>
          All trips
        </button>
      </div>
    </div>
  );
}

