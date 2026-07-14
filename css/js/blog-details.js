import { blogs } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const relatedContainer = document.getElementById('related-posts');
    if (relatedContainer) {
        const shuffled = blogs.sort(() => 0.5 - Math.random());
        const related = shuffled.slice(0, 3);
        relatedContainer.innerHTML = related.map(b => `
            <div style="background:#f8f5f0; border-radius:12px; padding:15px; text-align:center;">
                <img src="${b.image}" alt="${b.title}" style="width:100%; height:120px; object-fit:cover; border-radius:8px;" loading="lazy" />
                <h4 style="margin:10px 0 5px; font-family:'Playfair Display',serif; font-size:1rem;">${b.title}</h4>
                <a href="blog-details.html" style="color:#b8860b; font-size:14px;">Read More</a>
            </div>
        `).join('');
    }

    const commentsSection = document.getElementById('comments-section');
    if (commentsSection) {
        const dummyComments = [
            { name: 'Ali Khan', comment: 'Great article! Very informative.', date: 'April 2, 2026' },
            { name: 'Sara Ahmed', comment: 'I loved the recipes!', date: 'April 3, 2026' }
        ];
        commentsSection.innerHTML = dummyComments.map(c => `
            <div style="background:#f8f5f0; padding:15px; border-radius:12px; margin-bottom:10px;">
                <strong>${c.name}</strong> <span style="color:#888; font-size:12px;">${c.date}</span>
                <p style="margin-top:5px;">${c.comment}</p>
            </div>
        `).join('');
    }

    const commentForm = document.getElementById('comment-form');
    if (commentForm) {
        commentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = commentForm.querySelector('input');
            const msg = commentForm.querySelector('textarea');
            if (name.value.trim() && msg.value.trim()) {
                alert('✅ Comment posted successfully!');
                commentForm.reset();
            } else {
                alert('❌ Please fill your name and comment.');
            }
        });
    }
});