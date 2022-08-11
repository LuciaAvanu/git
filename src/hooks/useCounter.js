import { useState, useEffect } from "react";
import { PublishSubscribe } from "../PublishSubscribe";

export const useCounter = () => {
  let { subscribe, unsubscribe } = PublishSubscribe();

  useEffect(() => {
    subscribe("modifyCounter", changeValue);
    subscribe("modifyCounter", showValue);
    // unsubscribe("modifyCounter", 1);
  }, []);

  const [counterValue, setCounterValue] = useState(0);

  function changeValue(_event, newCounterValue) {
    setCounterValue(newCounterValue);
  }

  function showValue(_event, newCounterValue) {
    console.log(`value is ${newCounterValue}`);
  }

  return counterValue;
};
