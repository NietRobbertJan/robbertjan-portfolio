document.addEventListener('DOMContentLoaded', () => {
    console.log("Website geladen! Succes met racen, Robbert-Jan.");
    
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease-out';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        console.log("Form gevonden!");
        contactForm.addEventListener('submit', async (e) => {
            console.log("Submit triggered!");
            e.preventDefault();
            const data = new FormData(contactForm);
            const response = await fetch('https://formspree.io/f/xkopkdel', {
                method: 'POST',
                body: data,
                headers: { 'Accept': 'application/json' }
            });
            if (response.ok) {
                contactForm.innerHTML = `
                    <div style="text-align:center; padding: 40px 20px;">
                        <div style="font-size: 3rem; margin-bottom: 20px;">✅</div>
                        <h2 style="color: var(--primary-blue); margin-bottom: 10px;">Bericht Verzonden!</h2>
                        <p style="color: var(--text-dim);">Bedankt voor je bericht. Ik neem zo snel mogelijk contact met je op.</p>
                    </div>
                `;
            } else {
                alert('Er is iets misgegaan. Probeer het opnieuw.');
            }
        });
    } else {
        console.log("Form NIET gevonden!");
    }
});