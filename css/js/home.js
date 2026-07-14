import { categories, specials, menuItems, chefs, testimonials, whyChoose, galleryImages, instagramImages } from './data.js';

document.addEventListener('DOMContentLoaded', () => {

    // ---- RENDER CATEGORIES (6) ----
    const catGrid = document.getElementById('categories-grid');
    if (catGrid) {
        catGrid.innerHTML = categories.map(c => `
            <div class="category-card">
                <img src="${c.image}" alt="${c.name}" />
                <h3>${c.name}</h3>
                <p>${c.desc}</p>
            </div>
        `).join('');
    }

    // ---- RENDER TODAY'S SPECIAL (3) ----
    const specialGrid = document.getElementById('specials-grid');
    if (specialGrid) {
        specialGrid.innerHTML = specials.map(s => `
            <div class="special-card">
                <div class="special-image">
                    <img src="${s.image}" alt="${s.name}" />
                    <span class="discount-badge">-${s.discount}%</span>
                </div>
                <div class="special-info">
                    <h3>${s.name}</h3>
                    <div class="special-meta">
                        <span class="price">$${s.price}</span>
                        <span class="rating"><i class="fas fa-star"></i> ${s.rating}</span>
                    </div>
                    <button class="btn btn-primary btn-sm add-to-cart">Add to Cart</button>
                </div>
            </div>
        `).join('');
    }

    // ---- RENDER POPULAR MENU (12) ----
    const popularGrid = document.getElementById('popular-menu-grid');
    if (popularGrid) {
        popularGrid.innerHTML = menuItems.map(item => `
            <div class="menu-item-card">
                <img src="${item.image}" alt="${item.name}" />
                <div class="menu-item-info">
                    <h4>${item.name}</h4>
                    <span class="category-tag">${item.category}</span>
                    <div class="menu-item-meta">
                        <span class="price">$${item.price}</span>
                        <span class="rating"><i class="fas fa-star"></i> ${item.rating}</span>
                    </div>
                    <button class="btn btn-primary btn-sm add-to-cart" style="width:100%;">Add to Cart</button>
                </div>
            </div>
        `).join('');
    }

    // ---- RENDER CHEFS (4) ----
    const chefsGrid = document.getElementById('chefs-grid');
    if (chefsGrid) {
        chefsGrid.innerHTML = chefs.map(c => `
            <div class="chef-card">
                <img src="${c.image}" alt="${c.name}" />
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

    // ---- RENDER WHY CHOOSE (6) ----
    const whyGrid = document.getElementById('why-grid');
    if (whyGrid) {
        whyGrid.innerHTML = whyChoose.map(w => `
            <div class="why-card">
                <div class="why-icon"><i class="fas ${w.icon}"></i></div>
                <h3>${w.title}</h3>
                <p>${w.desc}</p>
            </div>
        `).join('');
    }

    // ---- RENDER TESTIMONIALS SLIDER (3) ----
    const track = document.getElementById('testimonial-track');
    if (track) {
        track.innerHTML = testimonials.map(t => `
            <div class="testimonial-card">
                <div class="testimonial-image"><img src="${t.image}" alt="${t.name}" /></div>
                <div class="testimonial-rating">${'<i class="fas fa-star"></i>'.repeat(t.rating)}</div>
                <p>"${t.review}"</p>
                <h4>${t.name}</h4>
            </div>
        `).join('');
        // Slider controls
        let currentIndex = 0;
        const slides = track.querySelectorAll('.testimonial-card');
        const totalSlides = slides.length;
        document.querySelector('.testimonial-next')?.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        });
        document.querySelector('.testimonial-prev')?.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        });
        // Auto-slide
        setInterval(() => {
            currentIndex = (currentIndex + 1) % totalSlides;
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        }, 5000);
    }

    // ---- RENDER GALLERY PREVIEW (12 images with filter) ----
    const galleryGrid = document.getElementById('gallery-grid');
    if (galleryGrid) {
        const renderGallery = (filter = 'all') => {
            const filtered = filter === 'all' ? galleryImages.slice(0, 12) : galleryImages.filter(g => g.category === filter).slice(0, 12);
            galleryGrid.innerHTML = filtered.map(g => `
                <div class="gallery-item" data-category="${g.category}">
                    <img src="${g.image}" alt="Gallery" />
                </div>
            `).join('');
        };
        renderGallery('all');
        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                renderGallery(this.dataset.filter);
            });
        });
    }

    // ---- RENDER INSTAGRAM FEED (8) ----
    const instaGrid = document.getElementById('instagram-grid');
    if (instaGrid) {
        instaGrid.innerHTML = instagramImages.map(img => `
            <div class="insta-item"><img src="${img}" alt="Instagram" /></div>
        `).join('');
    }

    // ---- HERO SLIDER ----
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelector('.hero-dots');
    if (slides.length > 0 && dots) {
        let currentSlide = 0;
        // Create dots
        dots.innerHTML = slides.map((_, i) => `<span class="${i === 0 ? 'active' : ''}"></span>`).join('');
        const dotElements = dots.querySelectorAll('span');
        const showSlide = (index) => {
            slides.forEach((s, i) => s.classList.toggle('active', i === index));
            dotElements.forEach((d, i) => d.classList.toggle('active', i === index));
        };
        document.querySelector('.hero-next')?.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        });
        document.querySelector('.hero-prev')?.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        });
        dotElements.forEach((dot, i) => {
            dot.addEventListener('click', () => { currentSlide = i;
                showSlide(i); });
        });
        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 6000);
    }

    // ---- ANIMATED COUNTERS ----
    const counters = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.count);
                let current = 0;
                const increment = target / 80;
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
    counters.forEach(c => observer.observe(c));

    // ---- ADD TO CART FUNCTIONALITY ----
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const countEl = document.querySelector('.cart-count');
            if (countEl) {
                let count = parseInt(countEl.textContent) || 0;
                count++;
                countEl.textContent = count;
                alert('Item added to cart!');
            }
        }
    });
});