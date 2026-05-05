const moveEyes = (mouseX, mouseY) => {
    const eyes = document.querySelectorAll('.eye');
    eyes.forEach((eye) => {
        const dot = eye.querySelector('.dot');
        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;
        
        const angle = Math.atan2(mouseY - eyeY, mouseX - eyeX);
        const distance = rect.width / 4; // Ko'z qorachig'i chegaradan chiqib ketmasligi uchun
        
        const moveX = Math.cos(angle) * distance;
        const moveY = Math.sin(angle) * distance;
        
        dot.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
};

// Sichqoncha harakati
document.addEventListener('mousemove', (e) => {
    moveEyes(e.clientX, e.clientY);
});

// Barmoq harakati (Mobil uchun)
const handleTouch = (e) => {
    const touch = e.touches[0];
    moveEyes(touch.clientX, touch.clientY);
};

document.addEventListener('touchmove', handleTouch, { passive: true });
document.addEventListener('touchstart', handleTouch, { passive: true });