document.addEventListener("DOMContentLoaded", () => {
    const typewriterText = document.querySelector(".typewriter-text");
    const words = ["developer", "designer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeWriterEffect() {
        // Check if currently deleting or typing
        if (isDeleting) {
            typewriterText.textContent = words[wordIndex].slice(0, charIndex--) + '|';
        } else {
            typewriterText.textContent = words[wordIndex].slice(0, charIndex++) + '|';
        }

        // Handle word completion and switching to deletion or next word
        if (!isDeleting && charIndex === words[wordIndex].length) {
            setTimeout(() => isDeleting = true, 2000); // Pause before deleting
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; // Move to the next word
        }

        // Set typing speed dynamically
        const typingSpeed = isDeleting ? 100 : 150;
        setTimeout(typeWriterEffect, typingSpeed);
    }

    typeWriterEffect();
});
