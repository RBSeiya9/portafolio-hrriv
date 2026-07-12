/* ================================================================
   backend.js — Back-End Architecture Interactive Page
   Rubén Rodríguez · RBSEIYA STUDIO
   ================================================================ */

'use strict';

// ─── Particle Background ──────────────────────────────────────────────────────
const canvas = document.getElementById('particles-canvas');
const ctx    = canvas.getContext('2d');
let particles = [];
let mouse = { x: null, y: null };
let animFrame;

function resizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

window.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
}, { passive: true });

class Particle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x  = Math.random() * canvas.width;
    this.y  = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.35;
    this.vy = (Math.random() - 0.5) * 0.35;
    this.r  = Math.random() * 1.6 + 0.4;
    this.alpha = Math.random() * 0.4 + 0.1;

    // Random neon color
    const colors = [
      '99,102,241',  // indigo
      '168,85,247',  // purple
      '34,211,238',  // cyan
      '236,72,153',  // pink
    ];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    // Mouse repulsion
    if (mouse.x !== null) {
      const dx = this.x - mouse.x;
      const dy = this.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        const force = (120 - dist) / 120 * 0.015;
        this.vx += dx / dist * force;
        this.vy += dy / dist * force;
      }
    }

    // Damping
    this.vx *= 0.998;
    this.vy *= 0.998;

    // Wrap edges
    if (this.x < 0) this.x = canvas.width;
    if (this.x > canvas.width) this.x = 0;
    if (this.y < 0) this.y = canvas.height;
    if (this.y > canvas.height) this.y = 0;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
    ctx.fill();
  }
}

function initParticles() {
  const count = Math.min(Math.floor((canvas.width * canvas.height) / 12000), 140);
  particles = [];
  for (let i = 0; i < count; i++) {
    particles.push(new Particle());
  }
}
initParticles();

function drawConnections() {
  const maxDist = 130;
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < maxDist) {
        const opacity = (1 - dist / maxDist) * 0.12;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(99,102,241, ${opacity})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  drawConnections();
  animFrame = requestAnimationFrame(animateParticles);
}
animateParticles();

// ─── Typing Effect in Terminal ────────────────────────────────────────────────
const typingEl = document.getElementById('typing-cmd');
const commands = [
  'docker ps --format "{{.Names}}: {{.Status}}"',
  'ssh -i ~/.ssh/rbseiya root@cloud-vm',
  'sqlite3 chinoscafe.db "SELECT COUNT(*) FROM orders;"',
  'nmap -sV localhost',
  'tail -f /var/log/api/requests.log',
  'systemctl restart smtp-notifier',
  'curl -X POST /api/v1/checkout',
  'git log --oneline -5',
];

let cmdIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingTimeout;

function typeCmd() {
  const cmd = commands[cmdIndex];

  if (!isDeleting) {
    typingEl.textContent = cmd.substring(0, charIndex);
    charIndex++;
    if (charIndex > cmd.length) {
      isDeleting = true;
      typingTimeout = setTimeout(typeCmd, 2200);
      return;
    }
    typingTimeout = setTimeout(typeCmd, 45 + Math.random() * 40);
  } else {
    typingEl.textContent = cmd.substring(0, charIndex);
    charIndex--;
    if (charIndex < 0) {
      isDeleting = false;
      charIndex = 0;
      cmdIndex = (cmdIndex + 1) % commands.length;
      typingTimeout = setTimeout(typeCmd, 400);
      return;
    }
    typingTimeout = setTimeout(typeCmd, 20);
  }
}
typeCmd();

// ─── Scroll Spy ───────────────────────────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateSpy() {
  const scrollPos = window.scrollY + 120;
  sections.forEach(section => {
    if (scrollPos >= section.offsetTop &&
        scrollPos < section.offsetTop + section.offsetHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${section.id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}
window.addEventListener('scroll', updateSpy, { passive: true });

// ─── Back to Top ──────────────────────────────────────────────────────────────
const backToTopBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  backToTopBtn.classList.toggle('show', window.scrollY > 400);
}, { passive: true });
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ─── Reveal on Scroll ─────────────────────────────────────────────────────────
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
reveals.forEach(el => observer.observe(el));

// ─── Node Hover Glow Follow Mouse ────────────────────────────────────────────
document.querySelectorAll('.arch-node').forEach(node => {
  node.addEventListener('mousemove', (e) => {
    const rect = node.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const glow = node.querySelector('.node-glow');
    if (glow) {
      glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(99,102,241,0.08), transparent 60%)`;
    }
  });
});

// ─── Smooth Scroll with Nav Offset ────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navH = parseInt(getComputedStyle(document.documentElement)
                          .getPropertyValue('--nav-h')) || 72;
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - navH - 20,
      behavior: 'smooth',
    });
  });
});

// ─── Init Log ─────────────────────────────────────────────────────────────────
console.log('%c⚙ Back-End Architecture · RBSEIYA STUDIO',
  'color:#6366f1;font-family:monospace;font-size:14px;font-weight:700;');
console.log('%cRubén Rodríguez · UTP Chiriquí · 2026',
  'color:#a855f7;font-family:monospace;font-size:11px;');
