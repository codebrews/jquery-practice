// 1. Show the hidden restaurant review, or use an animation method to reveal it. 
$('.review').show();
// 2. Set the title of the hidden restaurant review to a different name -- whatever you'd like.  
$('.review h3').text("Dat Fat");
// 3. Change the text of the hidden restaurant review. The review should contain HTML, such as a strong tag or a span element. 
$('.review p').html("This will make you fat, but you won't be mad about it!");
// 4. Change the name of the app. Change *only* the text inside the span element within the h1.
$('h1 span').text("Yarp¡¡¡");
// 5. Create an animation for the paragraph with the id of "flashMessage." Chain an animation that 
$('#flashMessage').hide().slideDown(1000).delay(2000).slideUp(1000);
  // slides the message down for 1 second
  // delays the message for 2 seconds 
  // slides the message up for 1 second 

// 6. Inside the click handler, create a working restaurant review form.
  //  a. Use the val() method to get what's been entered into the restaurant name and restaurant review form input fields. Save both values to variables.
  //  b. Insert the restaurant name value into the #newRestaurant h3 tag 
  //  c. Insert the restaurant review value into the #newRestaurant paragraph tag
$('#submitBtn').click(function(){
  const restaurant = $('#restaurantNameInput').val();
  const review = $('#restaurantReviewInput').val();

  $('#newRestaurant h3').text(restaurant);
  $('#newRestaurant p').text(review);  
});


