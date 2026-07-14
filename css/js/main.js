// ============================================
// MAIN.JS - GLOBAL FUNCTIONALITY
// ============================================

document.addEventListener('DOMContentLoaded', () => {

    // ---- LOADING SCREEN HIDE ----
    setTimeout(() => {
        const loader = document.getElementById('loading-screen');
        if (loader) loader.classList.add('hidden');
    }, 800);

    // ---- BACK TO TOP ----
    const backBtn = document.getElementById('back-to-top');
    if (backBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) backBtn.classList.add('visible');
            else backBtn.classList.remove('visible');
        });
        backBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    // ---- SCROLL PROGRESS BAR ----
    const progress = document.getElementById('scroll-progress');
    if (progress) {
        window.addEventListener('scroll', () => {
            const scrollTop = document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            progress.style.width = (scrollTop / height) * 100 + '%';
        });
    }

    // ---- THEME TOGGLE (Dark/Light) ----
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const icon = themeToggle.querySelector('i');
            icon.classList.toggle('fa-moon');
            icon.classList.toggle('fa-sun');
            // Save preference
            const mode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
            localStorage.setItem('theme', mode);
        });
        // Load saved theme
        const saved = localStorage.getItem('theme');
        if (saved === 'dark') {
            document.body.classList.add('dark-mode');
            const icon = themeToggle.querySelector('i');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }

    // ---- MOBILE HAMBURGER MENU ----
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        // Close menu on link click (mobile)
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => navMenu.classList.remove('active'));
        });
    }

    // ---- SEARCH POPUP ----
    const searchToggle = document.getElementById('search-toggle');
    const searchPopup = document.getElementById('search-popup');
    const searchClose = document.getElementById('search-close');
    if (searchToggle && searchPopup && searchClose) {
        searchToggle.addEventListener('click', () => searchPopup.classList.add('active'));
        searchClose.addEventListener('click', () => searchPopup.classList.remove('active'));
        searchPopup.addEventListener('click', (e) => {
            if (e.target === searchPopup) searchPopup.classList.remove('active');
        });
    }

    // ---- STICKY NAVIGATION ----
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 80) header.classList.add('sticky');
            else header.classList.remove('sticky');
        });
    }

    // ---- ACTIVE NAVIGATION LINK (based on current page) ----
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-menu a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) link.classList.add('active');
        else link.classList.remove('active');
    });

    // ---- SCROLL REVEAL ANIMATIONS ----
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    revealElements.forEach(el => revealObserver.observe(el));

    // ---- NEWSLETTER FORM ----
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = newsletterForm.querySelector('input');
            if (input.value.trim()) {
                alert('✅ Thank you for subscribing!');
                input.value = '';
            } else {
                alert('Please enter your email.');
            }
        });
    }

    // ---- CONTACT FORM (if on contact page) ----
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = contactForm.querySelector('input[type="text"]');
            const email = contactForm.querySelector('input[type="email"]');
            const msg = contactForm.querySelector('textarea');
            if (name.value.trim() && email.value.trim() && msg.value.trim()) {
                alert('✅ Your message has been sent!');
                contactForm.reset();
            } else {
                alert('Please fill all fields.');
            }
        });
    }

    // ---- RESERVATION FORM (if on reservation page) ----
    const resForm = document.getElementById('reservation-form');
    if (resForm) {
        resForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const inputs = resForm.querySelectorAll('input, textarea');
            let valid = true;
            inputs.forEach(inp => {
                if (inp.hasAttribute('required') && !inp.value.trim()) valid = false;
            });
            if (valid) {
                alert('✅ Table booked successfully! We will confirm shortly.');
                resForm.reset();
            } else {
                alert('Please fill all required fields.');
            }
        });
    }

    // ---- FAQ ACCORDION (if on FAQ page) ----
    const faqContainer = document.getElementById('faq-accordion');
    if (faqContainer) {
        faqContainer.addEventListener('click', (e) => {
            const item = e.target.closest('.faq-item');
            if (item) {
                const answer = item.querySelector('.faq-answer');
                const isOpen = answer.style.maxHeight;
                // Close all others
                faqContainer.querySelectorAll('.faq-answer').forEach(a => {
                    if (a !== answer) {
                        a.style.maxHeight = null;
                        a.closest('.faq-item').classList.remove('open');
                    }
                });
                if (isOpen) {
                    answer.style.maxHeight = null;
                    item.classList.remove('open');
                } else {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    item.classList.add('open');
                }
            }
        });
    }
});