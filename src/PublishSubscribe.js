const events = {};
let store = {};

export const PublishSubscribe = () => {
  let subscriberId = -1;

  function subscribe(event, callbackFunction) {
    subscriberId += 1;

    if (!events[event]) {
      events[event] = [];
    }

    events[event].push({
      subscriberId,
      callbackFunction,
    });
  }

  function unsubscribe(event, subscriberId) {
    for (let subscriber of events[event]) {
      if (subscriber.subscriberId === subscriberId) {
        let foundSubscriber = subscriber;
        events[event].splice(events[event].indexOf(foundSubscriber), 1);
      }
    }
  }

  function publish(event, data) {
    store[event] = data;
    const subscribers = events[event];
    for (let subscriber of subscribers) {
      subscriber.callbackFunction(event, store[event]);
    }
  }

  return {
    subscribe,
    unsubscribe,
    publish,
  };
};
