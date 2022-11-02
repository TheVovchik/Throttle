[DEMO-LINK](https://thevovchik.github.io/Throttle/)

Implement throttle decorator

It takes a function and a delay as arguments and returns a wrapper function
The original function should be called not more than once per a give delay interval
Test your implementation with the throttled cursor logger
The 1st time the original function is called immediately when mose is moved
While the cursor is moving the original function is called once a second with the latest wrapper arguments
If the cursor stops there should be one more original function call exactly in 1s after the previous one with the final cursor position
(*) pass a correct this into the original function if you can (uncomment it in the code)

function onMove(event) {
  console.log(event.clientX)
}

function throttle(f, delay) {
  // ...
}

let wrapper = throttle(onMove, 1000);

document.addEventListener('mousemove', wrapper);
