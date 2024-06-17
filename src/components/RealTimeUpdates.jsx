import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { runTask } from '../services/l2macService';

const RealTimeUpdates = () => {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    const eventSource = new EventSource('/api/stream-updates');
    eventSource.onmessage = (event) => {
      const newUpdate = JSON.parse(event.data);
      setUpdates((prevUpdates) => [...prevUpdates, newUpdate]);
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Real-Time Updates</Card.Title>
        <Card.Text>
          {updates.length === 0 ? (
            <p>No updates yet...</p>
          ) : (
            <ul>
              {updates.map((update, index) => (
                <li key={index}>{update.message}</li>
              ))}
            </ul>
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RealTimeUpdates;