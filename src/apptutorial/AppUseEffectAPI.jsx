import React, { useRef, useState, useEffect } from 'react';
import Card from '../components/Card';
import axios from 'axios';

export default function AppUseEffectAPI() {
  const [loading, setLoading] = useState(false);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    setLoading(true);

    async function getUsers() {
      try {
        const { data } = await axios('https://jsonplaceholder.typicode.com/users');

        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    }

    getUsers().then((r) => r);
  }, []);

  return (
    <div className='bg-slate-100 antialiased flex items-center justify-center min-h-screen'>
      <div className='max-w-md w-full'>
        <Card>
          <Card.Title>AJAX API Fatch Hook! || User : {users.length} </Card.Title>
          <Card.Body>
            {loading ? (
              <div>Loading</div>
            ) : (
              <ol>
                {users.map((user) => (
                  <li key={user.id}>
                    {user.name} : ({user.username})
                  </li>
                ))}
              </ol>
            )}
          </Card.Body>
          <Card.Footer></Card.Footer>
        </Card>
      </div>
    </div>
  );
}
