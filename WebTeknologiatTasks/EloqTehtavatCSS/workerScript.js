addEventListener("message", event => {
  postMessage(event.data * event.data + " this is pretty cool");
});