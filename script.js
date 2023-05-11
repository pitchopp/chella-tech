document.getElementById('cta-button').addEventListener('click', function() {
    alert('Merci! Nous vous contacterons bientôt pour discuter de votre projet.');
  });
  
  const contactForm = document.querySelector('.contact-form');
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Merci! Votre message a été envoyé. Nous vous répondrons dans les plus brefs délais.');
  });
  