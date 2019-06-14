// controls for changing the background
// create your event listener here
// add the background image change code inside of the event listener
document.getElementById('northern').addEventListener('click', function() {

    document.getElementById('rose').style.backgroundImage = "url('rose-blue-flower-rose-blooms-67636.jpeg')";
});
// this is the code for changing a background image
// missing image url
document.getElementById('rose-blue-flower-rose-blooms-67636.jpeg').style.backgroundImage = "url('https://www.w3schools.com/w3css/img_lights.jpg')";

// BUTTON CONTROLS

// controls for the left button
document.getElementById('left').addEventListener('click', function() {

});

// controls for the right button
// missing element id and event type
document.getElementById('right').addEventListener('click', function() {

    var position = document.getElementById('ball').style.left;

    var newPosition = parseInt(position) + 10;

    document.getElementById('ball').style.left = newPosition + 'px';
});