import { galleryImages } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const filterContainer = document.getElementById('gallery-page-filter');
    const galleryGrid = document.getElementById('gallery-page-grid');
    if (!filterContainer || !galleryGrid) return;

    const categories = ['All', 'food', 'interior', 'kitchen', 'events', 'staff'];

    filterContainer.innerHTML = categories.map(cat =>
        `<button class="filter-btn ${cat === 'All' ? 'active' : ''}" data-filter="${cat}">${cat.charAt(0).toUpperCase() + cat.slice(1)}</button>`
    ).join('');

    const renderGallery = (filter = 'All') => {
        const filtered = filter === 'All' ? galleryImages : galleryImages.filter(img => img.category === filter);
        if (filtered.length === 0) {
            galleryGrid.innerHTML = `<p style="grid-column:1/-1; text-align:center; padding:40px;">No images found.</p>`;
            return;
        }
        galleryGrid.innerHTML = filtered.map(img => `
            <div class="gallery-item" data-category="${img.category}">
                <img src="${img.image}" alt="Gallery" loading="lazy" />
            </div>
        `).join('');
    };

    renderGallery('All');

    filterContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-btn');
        if (!btn) return;
        filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderGallery(btn.dataset.filter);
    });
});