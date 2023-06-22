// particlesWorker.js
// Import the particles.min.js script
importScripts('./particles.min.js');

// Handle the computationally intensive task in the worker
self.onmessage = function(event) {
  // Perform the computationally intensive task using particles.min.js
  // You can access the necessary functions and APIs provided by particles.min.js here

  // Send the result back to the main thread
    self.postMessage(result);
};
