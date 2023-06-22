 //DOM Elements
 const circles = document.querySelectorAll(".circle"),
 progressBar = document.querySelector(".indicator"),
 buttons = document.querySelectorAll("button")
 ;
const prev = document.getElementById("prev"),
next = document.getElementById("next");;


let currentStep = 1;

// function that updates the current step and updates the DOM
const updateSteps = (e) => {
 // update current step based on the button clicked
 currentStep = e.target.id === "next" ? ++currentStep : --currentStep;

 // loop through all circles and add/remove "active" class based on their index and current step
 circles.forEach((circle, index) => {
   circle.classList[`${index < currentStep ? "add" : "remove"}`]("active");
 });

 // update progress bar width based on current step
 progressBar.style.width = `${((currentStep - 1) / (circles.length - 1)) * 100}%`;
 showForm(currentStep);

 // check if current step is last step or first step and disable corresponding buttons
 if (currentStep === circles.length) {
    console.log("here");
    prev.style.display = 'block';
    next.style.display = 'none';
    //next.disabled = true;
 } else if (currentStep === 1) {
    console.log("here");
   prev.style.display = 'none';
   next.style.display = 'block';
 } else {
    prev.style.display = 'block';
    next.style.display = 'block';
   buttons.forEach((button) => (button.disabled = false));
 }
};

// add click event listeners to all buttons
buttons.forEach((button) => {
 button.addEventListener("click", updateSteps);
});


function showForm(step) {
  // Hide all forms
  const forms = document.querySelectorAll('.form form');
  forms.forEach((form) => {
    form.style.display = 'none';
  });

  // Show the selected form
  const selectedForm = document.getElementById(`form-${step}`);
  selectedForm.style.display = 'block';
}
