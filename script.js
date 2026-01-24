const sections = document.querySelectorAll(".animate-up");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.animation = "slideUp 1.2s ease forwards";
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

sections.forEach((section, index) => {
    section.style.animationDelay = `${index * 0.3}s`;
    observer.observe(section);
});
