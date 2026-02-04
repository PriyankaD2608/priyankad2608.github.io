/* 🌌 PARTICLES */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
for (let i = 0; i < 60; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        d: Math.random() * 1
    });
}

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(108,255,143,0.6)";
    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        p.y -= p.d;
        if (p.y < 0) p.y = canvas.height;
    });
}
setInterval(drawParticles, 30);

/* 🧠 MAIN HEADING TYPING */
document.addEventListener("DOMContentLoaded", function () {
    const texts = [
        "Errors teach. I improve.",
       
    ];

    let i = 0, j = 0, isDeleting = false;
    const typedText = document.getElementById("typed-text");

    function typeEffect() {
        const current = texts[i];

        if (!isDeleting) {
            typedText.textContent = current.substring(0, j++);
            if (j > current.length) {
                isDeleting = true;
                setTimeout(typeEffect, 1200);
                return;
            }
        } else {
            typedText.textContent = current.substring(0, j--);
            if (j === 0) {
                isDeleting = false;
                i = (i + 1) % texts.length;
            }
        }

        setTimeout(typeEffect, isDeleting ? 40 : 70);
    }

    typeEffect();

    /* ✨ SUBTEXT TYPING */
    const subtextElement = document.getElementById("subtext");
    const subSentence = "learning, coding, and creating impactful solutions.";
    let subIndex = 0;

    function typeSubtext() {
        if (subIndex < subSentence.length) {
            subtextElement.textContent += subSentence.charAt(subIndex);
            subIndex++;
            setTimeout(typeSubtext, 60);
        }
    }

    setTimeout(typeSubtext, 2000);
});

/* 🎯 Reason Selector */
document.querySelectorAll(".reason-options button").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".reason-options button").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    });
});

/* 🧲 Magnetic Button */
const btn = document.querySelector(".magnetic");
document.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
});
