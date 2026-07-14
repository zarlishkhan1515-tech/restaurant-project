document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('reservation-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputs = form.querySelectorAll('input, textarea');
        let isValid = true;

        inputs.forEach(inp => {
            if (inp.hasAttribute('required') && !inp.value.trim()) {
                isValid = false;
                inp.style.borderColor = 'red';
            } else {
                inp.style.borderColor = '';
            }
        });

        if (isValid) {
            alert('✅ Reservation Confirmed! We will contact you shortly.');
            form.reset();
        } else {
            alert('❌ Please fill all required fields.');
        }
    });

    form.querySelectorAll('input, textarea').forEach(inp => {
        inp.addEventListener('input', () => { inp.style.borderColor = ''; });
    });
});