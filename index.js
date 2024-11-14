// Capture user's input on form submission
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const maxHoursPerLevel = {
    basic: 5,
    advanced: 10,
  };

  let userEmail = document.querySelector("#email").value;

  let userLevel = document.querySelector("#level").value;

  let userHours = parseInt(document.querySelector("#hoursPerWeek").value);

  // Validate the user's input
  let errors = {};

  // Helper function to add error messages
  function addError(field, message) {
    if (!errors[field]) {
      errors[field] = { messages: [] };
    }
    errors[field].messages.push(message);
  }

  // Check if the user has provided an email address
  if (userEmail === "") {
    addError("email", "Please enter your email address.");
  }

  if (userLevel === "") {
    addError("level", "Please select a level of study.");
  }

  if (isNaN(userHours) || userHours < 1) {
    addError("hoursPerWeek", "Please enter at least one hour of tuition.");
  }

  if (!maxHoursPerLevel.hasOwnProperty(userLevel)) {
    addError("level", "Invalid level of study selected.");
  }

  const maxAllowedHours = maxHoursPerLevel[userLevel];
  if (userHours > maxAllowedHours) {
    addError(
      "hoursPerWeek",
      `You can only study a maximum of ${maxAllowedHours} hours per week.`
    );
  }

  console.log({ errors });
});

// Store the user's email address as userEmail (string/text)
// Get the user's level -UserLevel variables - conditional statement and buttons?
// Get the user's hours of study - UserHours- Number
// Validate the user's input-check if the us
// Check if the user has selected a level-check level has been entered; check against allowed levels
// Check if the user has provided an email address -  is it valid, does it have an @? has it been entered?
// Check if the user has specified at least one hour of study - cannot be negative so use integers - must be equal to or greater than one.
// Check if the number of hours requested is within the allowed range- less than one or equal to the maximum number for the level
// Calculate the total cost
// Calculate the total cost
// Display the total cost to the user
