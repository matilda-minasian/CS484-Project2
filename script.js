$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.sleep-button').click(clickedSleepButton);
  
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Tank", weight:68, happiness:100, sleepiness: 30};
  
    function clickedTreatButton() {
      // Increase pet happiness
      // Increase pet weight
      pet_info['happiness'] += 10;
      pet_info['weight'] += 5;

      //Added a class to the pet image to make it bigger in size, to show its weight going up when it eats a treat
      //then removed that class after 2 seconds
      $('.pet-image').addClass('pet-eating');
      setTimeout(function() {
        $('.pet-image').removeClass('pet-eating');
      }, 2000);
      $('.pet-message').append("<p>Yummy! Thanks for the treat!</p>");
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      // Increase pet happiness
      // Decrease pet weight
      pet_info['happiness'] += 5;
      pet_info['weight'] -= 5;
      pet_info['sleepiness'] += 10;

      //Added a class to the pet image to make it look like it's playing by making the image bounce up and down quickly
      //then removed that class after 2 seconds
      $('.pet-image').addClass('pet-playing');
      setTimeout(function() {
        $('.pet-image').removeClass('pet-playing');
      }, 2000);
      $('.pet-message').append("<p>Yay! I love playing with you!</p>");
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      // Decrease pet happiness
      // Decrease pet weight
      pet_info['happiness'] -= 5;
      pet_info['weight'] -= 10;
      pet_info['sleepiness'] += 20;
      
      //Added a class to the pet image to make it look like it's exercising by making the image shake left and right quickly
      //Because the pet doesn't like exercising
      //then removed that class after 2 seconds
      $('.pet-image').addClass('pet-exercising');
      setTimeout(function() {
        $('.pet-image').removeClass('pet-exercising');
      }, 2000);
      $('.pet-message').append("<p>Ugh, I don't like exercising...</p>");
      checkAndUpdatePetInfoInHtml();
    }
    function clickedSleepButton() {
      // Increase pet happiness
      // Decrease pet sleepiness
      pet_info['happiness'] += 5;
      pet_info['sleepiness'] -= 10;

      //Added a class to the pet image to make it look like it's sleeping by making the opacity of the image lower
      //then removed that class after 3 seconds
      $('.pet-image').addClass('pet-sleeping');
      setTimeout(function() {
        $('.pet-image').removeClass('pet-sleeping');
      }, 3000);
      $('.pet-message').append("<p>Ahhh, I needed that nap!</p>");
      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero.
      if (pet_info['weight'] < 0) {
        pet_info['weight'] = 0;
      }
      if (pet_info['happiness'] < 0) {
        pet_info['happiness'] = 0;
      }
      if (pet_info['sleepiness'] < 0) {
        pet_info['sleepiness'] = 0;
      }
      
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      $('.sleepiness').text(pet_info['sleepiness']);
    }
  