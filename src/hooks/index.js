import { useState, useEffect } from "react";

const useCountDown = (start = 3) => {
    const [counter, setCounter] = useState(start);
    useEffect(() => {
      if (counter === 0) {
        return; 
      }
      setTimeout(() => {
        setCounter(counter - 1);
      }, 1000);
    }, [counter]);
    return counter;
  };

export const useFirstRender = (fn) => {
    const [firstRender, setFirstRender] = useState(false);

    useEffect(() => {
        if(!firstRender) {
            setFirstRender(true);
            fn();
        }
    }, [firstRender, fn])
}

export const useForceLoading = (seconds = 5) => {
    const counter = useCountDown(seconds);

    return counter > 0;
}