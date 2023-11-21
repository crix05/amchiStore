import React, { useState, useEffect } from 'react';

export default function Timer({ duration })
{
  const [timeRemaining, setTimeRemaining] = useState(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(timeRemaining - 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeRemaining]);

  let seconds = parseInt(Math.floor(timeRemaining / 1000));
  let minutes = parseInt(Math.floor(seconds / 60));
  let hours = parseInt(Math.floor(minutes / 60));

  seconds = parseInt(seconds % 60);
  minutes = parseInt(minutes % 60);

  if(parseInt(seconds)<10){
    seconds = "0"+seconds;
  }

  if(parseInt(minutes)<10){
    minutes = "0"+minutes;
  }

  if(parseInt(hours)<10){
    hours = "0"+hours;
  }

  return (`${hours} : ${minutes} : ${seconds}`);
}