import { faqs } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const accordion = document.getElementById('faq-accordion');
    if (!accordion) return;

    accordion.innerHTML = faqs.map((faq, index) => `
        <div class="faq-item" style="background:#fff; border-radius:12px; margin-bottom:12px; box-shadow:0 2px 10px rgba(0,0,0,0.04); overflow:hidden;">
            <div class="faq-question" style="padding:18px 24px; cursor:pointer; display:flex; justify-content:space-between; align-items:center; font-weight:600; font-family:'Playfair Display',serif; font-size:1.1rem;">
                ${faq.q}
                <span style="font-size:1.2rem; color:#b8860b;"><i class="fas fa-chevron-down"></i></span>
            </div>
            <div class="faq-answer" style="max-height:0; overflow:hidden; transition:max-height 0.4s ease; padding:0 24px; background:#f8f5f0;">
                <p style="padding:0 0 18px 0; color:#555; line-height:1.7;">${faq.a}</p>
            </div>
        </div>
    `).join('');

    accordion.addEventListener('click', (e) => {
        const question = e.target.closest('.faq-question');
        if (!question) return;
        const item = question.closest('.faq-item');
        const answer = item.querySelector('.faq-answer');
        const isOpen = answer.style.maxHeight;

        accordion.querySelectorAll('.faq-answer').forEach(a => {
            if (a !== answer) { a.style.maxHeight = null; }
        });

        if (isOpen) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});