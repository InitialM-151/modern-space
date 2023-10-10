import { useState, useRef } from 'react';
import Card from './components/Card';
import useJoke from './hooks/useJoke';
import Button from './components/Button';
import Input from './components/Input';

export default function App() {
  const nameRef = useRef();
  const [name, setName] = useState('Ahmad');
  const joke = useJoke(name);

  const generateJoke = (e) => {
    e.preventDefault();
    setName(nameRef.current.value);
  };

  return (
    <div className='bg-slate-100 antialiased flex items-center justify-center min-h-screen'>
      <div className='max-w-md w-full'>
        <Card>
          <Card.Title>AJAX API Fatch Custom Hook! || Joke</Card.Title>
          <Card.Body>
            <p className='mb-2'>{joke.value}</p>
            <Input ref={nameRef} />
          </Card.Body>
          <Card.Footer>
            <Button onClick={generateJoke}>Generate a joke</Button>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
}
