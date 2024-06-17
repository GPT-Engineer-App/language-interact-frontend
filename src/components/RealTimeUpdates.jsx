import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardTitle, CardText } from '@/components/ui/card';
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
      <CardBody>
        <CardTitle>Real-Time Updates</CardTitle>
        <CardText>
          {updates.length === 0 ? (
            <p>No updates yet...</p>
          ) : (
            <ul>
              {updates.map((update, index) => (
                <li key={index}>{update.message}</li>
              ))}
            </ul>
          )}
        </CardText>
      </CardBody>
    </Card>
  );
};

export default RealTimeUpdates;