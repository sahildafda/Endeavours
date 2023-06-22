// customParticlesWorker.js
importScripts('./customParticles.js');
// Handle the computationally intensive task in the worker
self.onmessage = function(event) {
    // Perform the computationally intensive task here
    // This could be the code from "customParticles.js" that takes a long time
    
    // Send the result back to the main thread
    self.postMessage(result);
  };
  