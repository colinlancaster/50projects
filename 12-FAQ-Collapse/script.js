// Bring in toggle buttons .faq-toggle
const buttons = document.querySelectorAll('.faq-toggle');

// Loop through nodelist using forEach
buttons.forEach(button => {
  // Add click event listener
  button.addEventListener('click', () => {
    button.parentNode.classList.toggle('active');
  });
});
