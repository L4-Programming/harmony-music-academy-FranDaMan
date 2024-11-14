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

  console.log({ userLevel, userHours, userEmail });
  // Validate the user's input
  // Check if the user has provided an email address
  if (userEmail === "") {
    alert("Please enter your email address.");

    return;
  }

  if (userLevel === "") {
    alert("Please enter a Level");
    return;
  }

  if (isNaN(userHours) || userHours < 1) {
    alert("Please enter at least one hour of tuition");
    return;
  }

  if (!maxHoursPerLevel.hasOwnProperty(userLevel)) {
    alert("invalid Level of study selected");
    return;
  }

  const maxAllowedHours = maxHoursPerLevel[userLevel];
  if (userHours > maxAllowedHours) {
    alert(`you can only study a maximum of ${maxAllowedHours} hours`);

    return;
  }

  console.log({ userEmail, userLevel, userHours });
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
