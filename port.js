/ Simple form submission handler
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    alert(Thank you, ${name}! Your message has been received.);
    // Reset the form
    e.target.reset();
  } else {
    alert('Please fill in all fields.');
  }
});
