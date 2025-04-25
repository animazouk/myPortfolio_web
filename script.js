// script.js

// Smooth scroll for navigation links (if any are added in the future)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

document.querySelectorAll('.section-title').forEach(button => {
    button.setAttribute('role', 'button');
    button.setAttribute('tabindex', '0');
    button.setAttribute('aria-expanded', 'true');
    const contentId = button.getAttribute('aria-controls');
    const content = document.getElementById(contentId);

    button.addEventListener('click', () => {
        if (!content) return;
        const expanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', String(!expanded));
        if (expanded) {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
        button.classList.toggle('active');
    });

    button.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            button.click();
        }
    });
});

// Example for dynamically updating personal info in the header if needed
const personalInfo = {
    name: 'Adarsh Vishwakarma',
    email: 'adarsh4553@gmail.com',
    address: '367 D, Defence Colony, Jajmau, Kanpur Nagar, UP–India',
    linkedin: 'https://linkedin.com/in/animodanger',
    github: 'https://github.com/animazouk'
};

// Populate header dynamically (if needed)
const headerInfo = document.querySelector('.contact-links');
if (headerInfo) {
    headerInfo.innerHTML = `
        <a href="mailto:${personalInfo.email}" class="link">${personalInfo.email}</a>
        <a href="${personalInfo.linkedin}" class="link" target="_blank" rel="noopener">LinkedIn</a>
        <a href="${personalInfo.github}" class="link" target="_blank" rel="noopener">GitHub</a>
    `;
}
