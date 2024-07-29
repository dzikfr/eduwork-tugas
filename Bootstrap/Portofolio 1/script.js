document.addEventListener('DOMContentLoaded', () => {
    let currentFrame = 0;
    const frames = document.querySelectorAll('section');
    const totalFrames = frames.length;
    let isScrolling = false;

    const scrollToFrame = (index) => {
        if (index < 0) index = 0;
        if (index >= totalFrames) index = totalFrames - 1;
        frames[index].scrollIntoView({ behavior: 'smooth' });
        currentFrame = index;
    };

    const handleScroll = (event) => {
        if (isScrolling) return;
        isScrolling = true;
        setTimeout(() => isScrolling = false, 1000); // Delay to prevent rapid scrolling

        if (event.deltaY > 0) {
            // Scroll down
            scrollToFrame(currentFrame + 1);
        } else {
            // Scroll up
            scrollToFrame(currentFrame - 1);
        }
    };

    document.addEventListener('wheel', handleScroll);
});