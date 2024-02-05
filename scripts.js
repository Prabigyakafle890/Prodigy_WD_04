
document.addEventListener('DOMContentLoaded', function () {
    var jobTitleElement = document.getElementById('job-title');
    var textToType = 'A Frontend Developer.';
    var initialDelay = 800;
    var typingSpeed = 80;

    
    function typeText(element, text, speed) {
        var index = 0;
        function typeNextCharacter() {
            if (index < text.length) {
                element.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeNextCharacter, speed);
            }
        }
        element.innerHTML = '';
        setTimeout(typeNextCharacter, initialDelay);
    }
    typeText(jobTitleElement, textToType, typingSpeed);
});
document.getElementById('mobile-menu').addEventListener('click', function () {
    document.querySelector('nav').classList.toggle('active');
});
