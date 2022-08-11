import { useCounter } from "../hooks/useCounter";
import { PublishSubscribe } from "../PublishSubscribe";

export const Container = () => {
  let { publish } = PublishSubscribe();
  let counterValue = useCounter("modifyCounter");

  function clickHandler(forwards = true) {
    if (forwards) {
      publish("modifyCounter", counterValue + 1);
    } else {
      publish("modifyCounter", counterValue - 1);
    }
  }

  return (
    <div className="container">
      <p className="counter">{counterValue}</p>
      <div className="btns-container">
        <button
          className="btn"
          onClick={() => {
            clickHandler(true);
          }}
        >
          Increment
        </button>
        <button
          className="btn"
          onClick={() => {
            clickHandler(false);
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};
