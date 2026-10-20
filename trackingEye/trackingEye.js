const eyes = document.querySelectorAll('.eye');

eyes.forEach((eye) => {
    const pupil = eye.querySelector('.pupil');

    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = eye.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const deltaX = (clientX - centerX) / width;
        const deltaY = (clientY - centerY) / height;
        const maxMove = 15; 
        const moveX = deltaX * maxMove;
        const moveY = deltaY * maxMove;

        eye.style.transform = `translate(${moveX}px, ${moveY}px)`;

        const angle = Math.atan2(deltaY, deltaX);
        const distance = Math.min(Math.hypot(deltaX, deltaY), 0.4);
        const pupilMaxMove = 30;

        const pupilMoveX = distance * pupilMaxMove * Math.cos(angle);
        const pupilMoveY = distance * pupilMaxMove * Math.sin(angle);

        pupil.style.transform = `translate(-50%, -50%) translate(${pupilMoveX}px, ${pupilMoveY}px)`;
    });
});
