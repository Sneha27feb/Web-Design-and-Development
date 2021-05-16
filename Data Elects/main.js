// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDCzeK4BWOY4vIdXrOul6IpigxwOahcQOg",
    authDomain: "data-elects.firebaseapp.com",
    databaseURL: "https://data-elects.firebaseio.com",
    projectId: "data-elects",
    storageBucket: "data-elects.appspot.com",
    messagingSenderId: "242480433465"
  };
  firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var subject = getInputVal('subject');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, subject, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, subject, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name:name,
    email:email,
    subject:subject,
    message:message
  });
}