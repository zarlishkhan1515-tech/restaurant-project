import { blogs } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const blogGrid = document.getElementById('blog-grid');
    if (!blogGrid) return;

    blogGrid.innerHTML = blogs.map(b => `
        <div class="blog-card" style="background:#fff; border-radius:16px; overflow:hidden; box-shadow:0 5px 20px rgba(0,0,0,0.06); transition:0.3s;">
            <img src="${b.image}" alt="${b.title}" style="width:100%; height:220px; object-fit:cover;" loading="lazy" />
            <div style="padding:20px;">
                <span style="font-size:12px; color:#b8860b; font-weight:600; text-transform:uppercase;">${b.category}</span>
                <h3 style="font-family:'Playfair Display',serif; margin:8px 0;">${b.title}</h3>
                <p style="color:#6c757d; font-size:14px;">By ${b.author} | ${b.date}</p>
                <a href="blog-details.html" class="btn btn-primary btn-sm" style="margin-top:15px; display:inline-block;">Read More</a>
            </div>
        </div>
    `).join('');
});