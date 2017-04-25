function startInterval(fn) {
  fn(); // do the function right now
  return setInterval.apply(this, arguments); // defer to setInterval
}

module.exports = startInterval; // let me be required