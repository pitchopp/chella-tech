AOS.init({
    duration: 1200,
});

document.getElementById('cta-button').addEventListener('click', function () {
    alert("Merci d'entrer en contact avec nous en envoyant un email à l'adresse contact@chella.tech");
});

const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Merci de nous envoyer votre demande à l'adresse contact@chella.tech");
});
