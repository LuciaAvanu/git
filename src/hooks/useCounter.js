import { useState, useEffect } from "react";
import { PublishSubscribe } from "../PublishSubscribe";

export const useCounter = (event) => {
  let { subscribe, unsubscribe } = PublishSubscribe();

  useEffect(() => {
    subscribe(event, changeValue);
    subscribe(event, showValue);
    // unsubscribe(event, 1);
  }, []);

  const [counterValue, setCounterValue] = useState(0);

  function changeValue(event, newCounterValue) {
    setCounterValue(newCounterValue);
  }

  function showValue(event, newCounterValue) {
    console.log(`value is ${newCounterValue}`);
  }

  return counterValue;
};
