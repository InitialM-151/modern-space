import React, { useRef, useState } from 'react';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';

export default function AppUseRefHook() {
  //=============//
  //*not rerendered state//*
  const tick = useRef(0);

  function handleClick() {
    tick.current = tick.current + 1;
    console.log(tick.current);

    //=============//
    //* rerendered state//*

    //   const [tick, setTick] = useState(0);
    // const nextTick = tick + 1;
    // setTick(nextTick);
    // console.log(nextTick);
  }

  return (
    <div className='bg-slate-100 antialiased flex items-center justify-center min-h-screen'>
      <div className='max-w-md w-full'>
        <Card>
          <Card.Title>useRaf Hooks!</Card.Title>
          <Card.Body>
            <Input inFocused />
            <Button onClick={handleClick}>Hint</Button>
          </Card.Body>
          <Card.Footer>You Have clicked {tick.current} times.</Card.Footer>
        </Card>
      </div>
    </div>
  );
}
