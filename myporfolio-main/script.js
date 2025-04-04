document.getElementById('contactBtn').addEventListener('click', function() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

// Typing animation for description
let typingDescription = document.getElementById('typing-description');
let descriptionText = "I'm Andrea Goodall, a passionate developer with experience in multiple technologies. I love solving problems and building creative, impactful solutions.";
let i = 0;

function type() {
    if (i < descriptionText.length) {
        typingDescription.innerHTML += descriptionText.charAt(i);
        i++;
        setTimeout(type, 100);
    }
}

window.onload = type;
