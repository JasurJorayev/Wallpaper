const fsToggle = document.getElementById('fs-toggle');

fsToggle.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.error(`Xatolik: ${err.message}`);
        });
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
});

// Ko'z harakati kodi (o'zgarishsiz qoladi)
document.addEventListener('mousemove', (e) => {
    const eyes = document.querySelectorAll('.eye');
    eyes.forEach((eye) => {
        const dot = eye.querySelector('.dot');
        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;
        const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX);
        const distance = 35; 
        const moveX = Math.cos(angle) * distance;
        const moveY = Math.sin(angle) * distance;
        dot.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});