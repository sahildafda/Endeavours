const checkbox = document.getElementById("animation-Button");
var starContainer = document.querySelector(".particles-js");
// const worker = new Worker('./script/particlesWebWorker.js');

// worker.onmessage = function(message)
// {
//   alert(`${message.data}`);
// }

function addParticles() {
    starContainer.id = "particles-js";
}

function removeParticles() {
    starContainer.removeAttribute("id");
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
    document.body.appendChild(particlesScript);
    document.body.appendChild(customParticlesScript);
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
        var statsPanel = document.querySelector('.stats');
      if (statsPanel) {
        statsPanel.remove();
      }
    }

    starContainer.removeAttribute("id");
    if (typeof particlesJS !== "undefined") {
      particlesJS("particles-js", "destroy");
    }
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

function TestAnim(){
    if (checkbox.checked) {
        console.log('Animation Started');
    } else {
        console.log('Animation Stopped');
    }
}

function disableView() {
  if (!checkbox.checked) {
    starContainer.style.opacity = "0";
    setTimeout(function() {
      starContainer.style.display = "none";
    }, 900); // Adjust the duration of the animation (in milliseconds) as needed
  } else {
    starContainer.style.display = "block";
    setTimeout(function() {
      starContainer.style.opacity = "1";
    }, 800); // Add a small delay before setting opacity to allow display block to take effect
  }
}

// Check initial checkbox state on document ready
if (checkbox.checked) {
  disableView();
}

function handleCheckboxChange() {
  disableView();
}

checkbox.addEventListener("change", function() {
  handleCheckboxChange();
  // if(checkbox.checked){
  //   worker.postMessage('true');
  // }else{
  //   worker.postMessage('false');
  // }
});