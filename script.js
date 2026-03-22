function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    lightboxImg.src = imageSrc;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

// Close lightbox when hitting Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeLightbox();
    }
});

/* ================= TESTIMONIALS LOGIC ================= */
function addReview() {
    const nameInput = document.getElementById('reviewName');
    const roleInput = document.getElementById('reviewRole');
    const textInput = document.getElementById('reviewText');

    if (!nameInput || !roleInput || !textInput) return;

    const name = nameInput.value.trim();
    const role = roleInput.value.trim();
    const text = textInput.value.trim();

    if (!name || !role || !text) {
        alert("Please fill in all fields to submit a review.");
        return;
    }

    const initial = name.charAt(0).toUpperCase();

    const cardHTML = `
        <div class="testimonial-card" style="animation: fadeIn 0.5s ease;">
            <p class="quote">“${text}”</p>
            <div class="person">
                <div class="avatar">${initial}</div>
                <div>
                    <h3>${name}</h3>
                    <span>${role}</span>
                </div>
            </div>
        </div>
    `;

    const grid = document.querySelector('.testimonials-grid');
    if (grid) {
        grid.insertAdjacentHTML('beforeend', cardHTML);
        localStorage.setItem('savedTestimonials', grid.innerHTML);
    }

    nameInput.value = '';
    roleInput.value = '';
    textInput.value = '';

    alert("Thank you! Your review has been added to the page.");
}

// Load saved reviews when page loads
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.testimonials-grid');
    if (grid) {
        const saved = localStorage.getItem('savedTestimonials');
        if (saved) {
            grid.innerHTML = saved;
        }
    }
});
