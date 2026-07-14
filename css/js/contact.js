document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = form.querySelector('input[type="text"]');
        const email = form.querySelector('input[type="email"]');
        const msg = form.querySelector('textarea');

        if (name.value.trim() && email.value.trim() && msg.value.trim()) {
            alert('✅ Your message has been sent! We will get back to you soon.');
            form.reset();
        } else {
            alert('❌ Please fill all fields.');
        }
    });
});