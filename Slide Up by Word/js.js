document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".word").forEach((span, i) => {
        span.style.transitionDelay = `${i * 0.2}s`;
    });
    
    setTimeout(() => {
        document.querySelectorAll(".word").forEach(span => {
            span.style.opacity = "1";
            span.style.transform = "translateY(0)";
        });
    }, 100);
});