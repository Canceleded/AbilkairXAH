const links = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section[id]');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        links.forEach(link => {
        link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${entry.target.id}`
        );
        });
    });
}, {
    rootMargin: '-40% 0px -40% 0px',
    threshold: 0
});

sections.forEach(section => observer.observe(section));