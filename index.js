import { validateForm } from "./ValidateForm.js";

import { calculateCosts } from "./CalculateCosts.js";

import { displayResults } from "./DisplayingResults.js";

// Capture user's input on form submission
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let userEmail = document.querySelector("#email").value;

  let userLevel = document.querySelector("#level").value;

  let userHours = parseInt(document.querySelector("#hoursPerWeek").value);

  // Validate the user's input
  const result = validateForm({ userEmail, userLevel, userHours });

  if (result) {
    const output = calculateCosts(result);

    console.log({ output });

    displayResults(output);
  }

  console.log({ result });
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
// Display the total cost to the user})
