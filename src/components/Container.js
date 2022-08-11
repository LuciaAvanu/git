import { useCounter } from "../hooks/useCounter";
import { PublishSubscribe } from "../PublishSubscribe";

export const Container = () => {
  let { publish } = PublishSubscribe();
  let counterValue = useCounter();

  function incrementEvent() {
    publish("modifyCounter", counterValue + 1);
  }

  function decrementEvent() {
    publish("modifyCounter", counterValue - 1);
  }

  return (
    <div className="container">
      <p className="counter">{counterValue}</p>
      <div className="btns-container">
        <button className="btn" onClick={incrementEvent}>
          Increment
        </button>
        <button className="btn" onClick={decrementEvent}>
          Decrement
        </button>
      </div>
    </div>
  );
};
