
var animationCheckbox = document.getElementById("animation-Button");
var customParticlesWorker = null; // Variable to hold the Web Worker instance
var ParticlesWorker = null;
/*
const checkbox = document.getElementById("animation-Button");
var starContainer = document.querySelector(".star_container");

function addParticles() {
    starContainer.id = "particles-js";
}

// Check initial checkbox state on document ready
if (checkbox.checked) {
    addParticles();
}


function removeParticles() {
    starContainer.removeAttribute("id");
}

function handleParticles(){
    if (checkbox.checked) {
        addParticles();
    } else {
        removeParticles();
    }
}

function handleScripts(){
    if (checkbox.checked) {
        addScripts();
    } else {
        removeScripts();
    }
}

function addScripts() {
    // Create script elements for particles.min.js and customParticles.js
    var particlesScript = document.createElement('script');
    particlesScript.src = './script/particles.min.js';
    particlesScript.async = true;

    var customParticlesScript = document.createElement('script');
    customParticlesScript.src = './script/customParticles.js';
    customParticlesScript.async = true;

    // Append the script elements to the document's head
    document.head.appendChild(particlesScript);
    document.head.appendChild(customParticlesScript);
}
function removeScripts() {
    // Remove script elements for particles.min.js and customParticles.js
    var particlesScript = document.querySelector('script[src="./script/particles.min.js"]');
    var customParticlesScript = document.querySelector('script[src="./script/customParticles.js"]');

    // Remove the script elements from the document's head
    if (particlesScript) {
        particlesScript.remove();
    }
    if (customParticlesScript) {
        customParticlesScript.remove();
    }
}
*/
function startWebWorker() {
    if (customParticlesWorker) {
        // Web Worker is already running, no need to start it again
        return;
    }

    if(ParticlesWorker){
        return;
    }


  // Create a new Web Worker for customParticlesWorker.js
    customParticlesWorker = new Worker('./script/customParticlesWorker.js');
    ParticlesWorker = new Worker('./script/particlesWorker.js');

    // Add message event listener to receive results from the worker
    customParticlesWorker.onmessage = function(event) {
        var result = event.data;
        // Process the result from the Web Worker

        // Update the UI or perform any other necessary actions
    };

        // Add message event listener to receive results from the worker
        ParticlesWorker.onmessage = function(event) {
            var result = event.data;
            // Process the result from the Web Worker
    
            // Update the UI or perform any other necessary actions
        };

  // Start the Web Worker
  customParticlesWorker.postMessage({ /* optional data to pass to the Web Worker */ });
  ParticlesWorker.postMessage({ /* optional data to pass to the Web Worker */ });
}

function stopWebWorker() {
    if (customParticlesWorker) {
        // Terminate the Web Worker
        customParticlesWorker.terminate();
        customParticlesWorker = null;
    }
    if (ParticlesWorker) {
        // Terminate the Web Worker
        ParticlesWorker.terminate();
        ParticlesWorker = null;
    }
}

function handleWorkers(){
    if (animationCheckbox.checked) {
        // Checkbox is checked, start the Web Worker
        startWebWorker();
    } else {
        // Checkbox is unchecked, stop the Web Worker
        stopWebWorker();
    }
}

function handleCheckboxChange() {
    handleWorkers();
}

animationCheckbox.addEventListener("change", function() {
    handleCheckboxChange();
});

