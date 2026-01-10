// 1. Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// 2. Scroll Reveal Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// 3. Typewriter Effect Logic
const textElement = document.querySelector(".typewriter");
const words = ["Cybersecurity Student", "Web Developer", "Ethical Hacker", "Tech Enthusiast"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 100 : 200; 

    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000); 
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; 
        setTimeout(typeEffect, 500); 
        return;
    }

    setTimeout(typeEffect, typingSpeed);
};
typeEffect();

// 4. Experience Tabs Logic (ROBUST VERSION)
const tabs = document.querySelectorAll('.tab-btn');
const all_content = document.querySelectorAll('.exp-panel');

tabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
        // Remove active class from all tabs and panels
        tabs.forEach(t => t.classList.remove('active'));
        all_content.forEach(c => c.classList.remove('active'));

        // Add active class to clicked tab
        tab.classList.add('active');

        // Select content using the data-target attribute
        const targetSelector = tab.getAttribute('data-target');
        const targetPanel = document.querySelector(targetSelector);
        if (targetPanel) {
            targetPanel.classList.add('active');
        }
    });
});

// 5. Load More Projects Logic
const loadMoreBtn = document.getElementById('load-more-btn');
const hiddenProjects = document.querySelectorAll('.hidden-project');

if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
        hiddenProjects.forEach(project => {
            if (project.style.display === 'block') {
                project.style.display = 'none';
                loadMoreBtn.textContent = 'Show More';
            } else {
                project.style.display = 'block';
                loadMoreBtn.textContent = 'Show Less';
            }
        });
    });
}
const loadMoreCertsBtn = document.getElementById('load-more-certs-btn');
const hiddenCerts = document.querySelectorAll('.hidden-cert');

if (loadMoreCertsBtn) {
    loadMoreCertsBtn.addEventListener('click', () => {
        hiddenCerts.forEach(cert => {
            if (cert.style.display === 'flex') { // Grid items use flex in your CSS
                cert.style.display = 'none';
                loadMoreCertsBtn.textContent = 'Show More Certs';
            } else {
                cert.style.display = 'flex';
                loadMoreCertsBtn.textContent = 'Show Less Certs';
            }
        });
    });
}