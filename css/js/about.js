import { chefs, whyChoose, galleryImages } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const teamGrid = document.getElementById('about-team-grid');
    if (teamGrid) {
        teamGrid.innerHTML = chefs.map(c => `
            <div class="chef-card">
                <img src="${c.image}" alt="${c.name}" loading="lazy" />
                <h3>${c.name}</h3>
                <p>${c.position}</p>
                <div class="chef-social">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
        `).join('');
    }

    const whyGrid = document.getElementById('about-why-grid');
    if (whyGrid) {
        whyGrid.innerHTML = whyChoose.map(w => `
            <div class="why-card">
                <div class="why-icon"><i class="fas ${w.icon}"></i></div>
                <h3>${w.title}</h3>
                <p>${w.desc}</p>
            </div>
        `).join('');
    }

    const aboutGallery = document.getElementById('about-gallery-grid');
    if (aboutGallery) {
        aboutGallery.innerHTML = galleryImages.slice(0, 6).map(img => `
            <div class="gallery-item"><img src="${img.image}" alt="Gallery" loading="lazy" /></div>
        `).join('');
    }

    const stats = document.querySelectorAll('#about-stats-2 .stat-number');
    if (stats.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.dataset.count);
                    let current = 0;
                    const increment = target / 60;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            el.textContent = target + (target > 100 ? '+' : '');
                            clearInterval(timer);
                        } else {
                            el.textContent = Math.floor(current);
                        }
                    }, 20);
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.5 });
        stats.forEach(s => observer.observe(s));
    }
});