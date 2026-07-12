/* ================================================================
   app.js — Portafolio Digital Unificado · Rubén Rodríguez
   Front-End + Back-End Architecture — All-in-One
   ================================================================ */

'use strict';

// ─── Project Data ─────────────────────────────────────────────────────────────
const PROJECTS = {
  chinos: {
    title: 'Aplicación Chinos Café S.A.',
    category: 'Android · E-commerce · Parcial #2',
    emoji: '☕',
    thumbBg: 'linear-gradient(135deg,#e0f2fe,#fce7f3)',
    tagColor: 'var(--accent-blue)',
    reto: `Crear un flujo de comercio electrónico seguro y completo para la empresa
           <strong>CHINOS CAFE S.A.</strong>, que incluyera: gestión de usuarios con
           roles diferenciados, catálogo de productos interactivo, carrito de compras
           dinámico y un sistema de pagos con notificaciones automáticas.`,
    solucion: `Se desarrolló una <strong>aplicación nativa en Android Studio</strong> con
               la siguiente arquitectura técnica:
               <ul style="margin-top:10px;margin-left:18px;display:flex;flex-direction:column;gap:6px;font-size:0.88rem;color:var(--text-secondary);">
                 <li>🗄️ <strong>Base de datos local SQLite</strong> para almacenamiento de usuarios, pedidos y productos.</li>
                 <li>🔄 <strong>Sincronización en tiempo real</strong> mediante técnica de <em>polling</em> hacia servidor en la nube/VM.</li>
                 <li>💳 <strong>Pasarela de pagos integrada</strong> con cálculo automático de ITBMS (7%), subtotal y total.</li>
                 <li>📧 <strong>Notificaciones SMTP automáticas</strong> al completarse una transacción.</li>
                 <li>👤 <strong>Detección automática de rol</strong> desde la base de datos tras el login y ruteo dinámico.</li>
               </ul>`,
    fases: [
      'Fase 1 — Diseño de la APP: Login con fondo gourmet y capa translúcida, Registro con iconos vectoriales personalizados.',
      'Fase 2 — Personalizador Interactivo: Selector horizontal con tarjetas reactivas, chips para bebidas y acompañamientos con actualización instantánea de factura.',
      'Fase 3 — Carrito de Compras: Tarjetas con miniatura del combo, selector en pastilla (- 1 +), eliminación, cálculo exacto de ITBMS.',
      'Fase 4 — Replicación en servidor en la nube y notificaciones SMTP automáticas.',
    ],
    quote: '"Implementamos un flujo de comercio electrónico seguro con base de datos local (SQLite), pasarela de pagos integrada, sincronización en tiempo real mediante polling, replicación en un servidor en la nube/VM, y notificaciones SMTP automáticas."',
    tags: ['Android Studio', 'SQLite', 'SMTP', 'Polling API', 'UI/UX', 'Java', 'SharedPreferences'],
    showCost: false,
    files: [
      { name: 'app/src/main/java', type: 'folder' },
      { name: 'app/src/main/res/layout', type: 'folder' },
      { name: 'chinoscafe.db', type: 'db' },
      { name: 'PARCIAL_II_HRRP4.pdf', type: 'pdf', url: 'PDF/PARCIAL_II_HRRP4.pdf' }
    ]
  },
  calculadora: {
    title: 'Calculadora Educativa — Colegio Belén',
    category: 'Android · UI Design · Taller Práctico #2',
    emoji: '🧮',
    thumbBg: 'linear-gradient(135deg,#f0fdf4,#ecfdf5)',
    tagColor: 'var(--accent-cyan)',
    reto: `La empresa educativa <strong>Colegio Belén</strong> (Chiriquí) contrató a
           <strong>RBSEIYA STUDIO</strong> para desarrollar un <em>prototipo de aplicación móvil
           calculadora</em> moderna con identidad visual institucional, cotización formal
           y presentación al cliente.`,
    solucion: `Se diseñó y desarrolló en <strong>Android Studio</strong> una calculadora educativa con:
               <ul style="margin-top:10px;margin-left:18px;display:flex;flex-direction:column;gap:6px;font-size:0.88rem;color:var(--text-secondary);">
                 <li>➕ Operaciones básicas: Suma, Resta, Multiplicación, División y Porcentaje.</li>
                 <li>🎨 Interfaz <strong>moderna estilo iOS</strong> con colores y tipografía corporativa del colegio.</li>
                 <li>🖼️ Integración del <strong>logo institucional</strong> y branding del desarrollador.</li>
                 <li>🗑️ Botón de borrado de campos con control de tipo de texto en los inputs.</li>
                 <li>✅ Pruebas de funcionamiento completas y validadas ante el cliente.</li>
               </ul>`,
    fases: [],
    quote: '"Interfaz moderna estilo iOS para operaciones básicas, personalización institucional y diseño optimizado para estudiantes."',
    tags: ['Android Studio', 'iOS UI Design', 'Branding', 'Java', 'XML Layouts', 'Cotización Formal'],
    showCost: true,
    costTable: [
      { desc: 'Análisis de requerimientos', qty: 1, unit: 15.00 },
      { desc: 'Diseño de interfaz (UI/UX)', qty: 1, unit: 25.00 },
      { desc: 'Desarrollo de la aplicación', qty: 1, unit: 60.00 },
      { desc: 'Integración de identidad visual', qty: 1, unit: 15.00 },
      { desc: 'Pruebas y validación', qty: 1, unit: 20.00 },
      { desc: 'Documentación básica', qty: 1, unit: 15.00 },
    ],
    company: 'RBSEIYA STUDIO',
    client: 'Colegio Belén',
    date: '10 Abril 2026',
    files: [
      { name: 'app/src/main/java', type: 'folder' },
      { name: 'app/src/main/res/layout', type: 'folder' },
      { name: 'Taller Práctico2.pdf', type: 'pdf', url: 'PDF/Taller Práctico2.pdf' }
    ]
  },
  redes: {
    title: 'Diseño de Red LAN — Cisco Packet Tracer',
    category: 'Redes · Telecomunicaciones · Parcial #1',
    emoji: '🌐',
    thumbBg: 'linear-gradient(135deg,#fef3c7,#fff7ed)',
    tagColor: 'var(--accent-pink)',
    reto: `Como parte del <strong>Parcial #1 de Herramientas de Programación IV</strong>,
           se debía diseñar una arquitectura de red LAN completa con direccionamiento IP
           estructurado, configuración de routers, switches, laptops y un servidor,
           demostrando conocimiento de subnetting y protocolos de red.`,
    solucion: `Se diseñó y simuló en <strong>Cisco Packet Tracer</strong> una topología de red LAN con:
               <ul style="margin-top:10px;margin-left:18px;display:flex;flex-direction:column;gap:6px;font-size:0.88rem;color:var(--text-secondary);">
                 <li>🖧 2 Routers (R1 y R2) con interfaces G0/0, G0/1, G0/2 configuradas.</li>
                 <li>🔀 2 Switches (SW0 y SW1) con direcciones de administración.</li>
                 <li>💻 Laptops (L1, L2) y SERVER1 con IPs estáticas.</li>
                 <li>🔗 Enlace serial R1–R2 en subred 10.0.0.0/30.</li>
                 <li>📐 Subnetting en rango <code style="font-family:var(--font-mono);font-size:0.82rem;background:rgba(0,0,0,0.05);padding:1px 6px;border-radius:4px;">172.17.10.0/24</code> y <code style="font-family:var(--font-mono);font-size:0.82rem;background:rgba(0,0,0,0.05);padding:1px 6px;border-radius:4px;">172.172.10.0/24</code>.</li>
               </ul>`,
    fases: [
      'Parte I — Configuración de routers y asignación de IPs a interfaces.',
      'Parte II — Configuración de switches y resolución de máscara de subred.',
      'Parte III — Simulación de tráfico entre dispositivos de la red.',
    ],
    quote: '"El equilibrio entre una buena red LAN que aguante los datos y una app bien estructurada que no se coma los recursos del teléfono."',
    tags: ['Cisco Packet Tracer', 'Subnetting IP', 'Redes LAN', 'Configuración de Routers', 'IPv4'],
    showCost: false,
    addressTable: [
      { device: 'R1 G0/0',  ip: '172.17.10.1',  mask: '255.255.255.0' },
      { device: 'R1 G0/1',  ip: '172.172.10.1', mask: '255.255.255.0' },
      { device: 'SW0',      ip: '172.17.10.2',  mask: '255.255.255.0' },
      { device: 'SW1',      ip: '172.172.10.2', mask: '255.255.255.0' },
      { device: 'L1',       ip: '172.17.10.24', mask: '255.255.255.0' },
      { device: 'L2',       ip: '172.172.10.21',mask: '255.255.255.0' },
      { device: 'SERVER1',  ip: '172.17.10.30', mask: '255.255.255.0' },
      { device: 'R2 G0/0',  ip: '10.0.0.2',     mask: '255.255.255.252' },
      { device: 'R1 G0/2',  ip: '10.0.0.1',     mask: '255.255.255.252' },
    ],
    files: [
      { name: 'Topologia_Final.pkt', type: 'pkt' },
      { name: 'PARCIAL.pdf', type: 'pdf', url: 'PDF/PARCIAL.pdf' },
      { name: 'UniversidadAseo/app/src/main/java', type: 'folder' },
      { name: 'UniversidadAseo/app/src/main/res/layout', type: 'folder' },
      { name: 'UniversidadAseo/app/src/androidTest', type: 'folder' }
    ]
  },
  ssh: {
    title: 'Servidor SSH & Máquina Virtual Linux',
    category: 'Sistemas · Servidores · Ejercicio 1 / Taller 1',
    emoji: '🖥️',
    thumbBg: 'linear-gradient(135deg,#f5f3ff,#ede9fe)',
    tagColor: 'var(--accent-violet)',
    reto: `Configurar un <strong>entorno de desarrollo completo para Android</strong>
           incluyendo la instalación del JDK de Java y Android Studio, y complementarlo
           con un servidor Linux con acceso SSH seguro, relacionando la calidad de la red
           con el rendimiento del entorno de desarrollo móvil.`,
    solucion: `<strong>Parte 1 — Entorno Android:</strong> Instalación paso a paso del JDK (Java 21)
               en Windows 11 x64 y configuración de Android Studio con el SDK Manager
               y un emulador AVD funcional.<br/><br/>
               <strong>Parte 2 — Servidor SSH / VM:</strong> Configuración de máquina virtual Linux
               con acceso remoto seguro mediante SSH, demostrando el vínculo entre
               la infraestructura de red y el rendimiento de las aplicaciones Android.`,
    fases: [
      'Paso 1 — Descarga e instalación del JDK desde Oracle (C:\\Program Files\\Java\\jdk-xx).',
      'Paso 2 — Instalación de Android Studio con SDK, emulador AVD configurado.',
      'Paso 3 — Creación de máquina virtual Linux en el entorno local.',
      'Paso 4 — Configuración de acceso SSH y pruebas de conectividad.',
    ],
    quote: '"De nada sirve ser un pro programando si la red de tu oficina se cae a cada rato, ni tampoco sirve tener la mejor red si tu app está mal hecha y se traba. Es un equilibrio entre los cables y el código."',
    tags: ['Linux VM', 'SSH', 'Android Studio SDK', 'JDK Java 21', 'Windows 11', 'Configuración del Entorno'],
    showCost: false,
    specs: 'Sistema Operativo: Windows 11 de 64 bits',
    files: [
      { name: 'Ejercicio1 hrrp4.pdf', type: 'pdf', url: 'PDF/Ejercicio1 hrrp4.pdf' },
      { name: 'MYsucesos/app/src/main/java', type: 'folder' },
      { name: 'MYsucesos/app/src/main/res/layout', type: 'folder' },
      { name: 'MYsucesos/app/src/androidTest', type: 'folder' }
    ]
  },
  investigacion: {
    title: 'Arquitectura, Glosario Android & Manejo de Eventos',
    category: 'Investigación · Talleres · Inv #1 · Taller 1',
    emoji: '📱',
    thumbBg: 'linear-gradient(135deg,#fdf4ff,#fce7f3)',
    tagColor: 'var(--accent-violet)',
    reto: `Investigar y documentar el ecosistema completo de Android (arquitectura, glosario,
           ciclo de vida), configurar el entorno de desarrollo completo con JDK y Android Studio,
           y estudiar el sistema de manejo de eventos en la plataforma Android.`,
    solucion: `Conjunto de trabajos teórico-prácticos que cubren:
               <ul style="margin-top:10px;margin-left:18px;display:flex;flex-direction:column;gap:6px;font-size:0.88rem;color:var(--text-secondary);">
                 <li>📖 <strong>Investigación #1:</strong> Glosario técnico del ecosistema Android, tipos de apps, ciclo de vida de Activities y AndroidManifest.xml.</li>
                 <li>🖥️ <strong>Taller 1:</strong> Instalación del JDK 21, configuración de Android Studio, SDK Manager, emulador AVD y configuración de servidor SSH en VM Linux.</li>
                 <li>🖱️ <strong>Manejo de Eventos:</strong> Estudio del sistema de eventos en Android — onClick, onTouch, listeners y eventos de teclado aplicados en la UI.</li>
               </ul>`,
    fases: [
      'Investigación #1 — Glosario de Android: tipos de apps, herramientas y ciclo de vida de componentes.',
      'Taller 1 — Instalación y configuración del entorno Android completo + Servidor SSH en Linux VM.',
      'Manejo de Eventos — Implementación de listeners y eventos de usuario en aplicaciones Android.',
    ],
    quote: '"El AndroidManifest es el que manda; si no está ahí, la app simplemente no existe para el sistema. El éxito de una app depende de qué tan bien estructurada esté por dentro."',
    tags: ['Android Architecture', 'Manejo de Eventos', 'Activity Lifecycle', 'JDK 21', 'SSH', 'SDK Manager'],
    showCost: false,
    files: [
      { name: 'Investigacion 1 HRRP4.pdf', type: 'pdf', url: 'PDF/Investigacion 1 HRRP4.pdf' },
      { name: 'TALLER 1 HRRP4.pdf', type: 'pdf', url: 'PDF/TALLER 1 HRRP4.pdf' },
      { name: 'Manejo de Eventos en Android Studio.pdf', type: 'pdf', url: 'PDF/Manejo de Eventos en Android Studio.pdf' }
    ]
  },
  chiriquiears: {
    title: 'CHIRIQUIEATS — Ejercicio 3',
    category: 'Android · E-commerce · Ejercicio #3',
    emoji: '🍔',
    thumbBg: 'linear-gradient(135deg,#fff7ed,#fef3c7)',
    tagColor: 'var(--accent-cyan)',
    reto: `Desarrollar la aplicación móvil <strong>CHIRIQUIEATS</strong>, una plataforma de
           delivery y pedidos de comida con identidad visual propia, catálogo de productos,
           flujo de compra y base de datos local dentro del entorno Android.`,
    solucion: `Aplicación nativa desarrollada en <strong>Android Studio</strong> para
               <strong>CHIRIQUIEATS</strong>, con diseño de interfaz completo,
               catálogo de productos y funcionalidades clave:
               <ul style="margin-top:10px;margin-left:18px;display:flex;flex-direction:column;gap:6px;font-size:0.88rem;color:var(--text-secondary);">
                 <li>🍔 Identidad visual personalizada con branding de la marca CHIRIQUIEATS.</li>
                 <li>🛍️ Catálogo de productos con menú interactivo y flujo de pedidos.</li>
                 <li>📱 Navegación intuitiva y diseño de UI centrado en la experiencia del usuario.</li>
                 <li>🗄️ Base de datos local SQLite para gestión de productos, usuarios y pedidos.</li>
               </ul>`,
    fases: [
      'Fase 1 — Diseño de identidad visual y branding de CHIRIQUIEATS.',
      'Fase 2 — Desarrollo de la interfaz de usuario y catálogo de productos.',
      'Fase 3 — Integración de base de datos SQLite y flujo de navegación completo.',
    ],
    quote: '"CHIRIQUIEATS: tecnología y sabor chiricanó en tu móvil. Una experiencia de pedidos diseñada con precisión y pasión."',
    tags: ['Android Studio', 'SQLite', 'UI/UX Design', 'Java', 'E-commerce', 'Branding'],
    showCost: false,
    files: [
      { name: 'app/src/main/java', type: 'folder' },
      { name: 'app/src/main/res/layout', type: 'folder' },
      { name: 'chiriquieats.db', type: 'db' },
      { name: 'EJERCICIO 3.pdf', type: 'pdf', url: 'PDF/EJERCICIO 3.pdf' }
    ]
  },
};

// ─── Particle Background (for dark zone) ──────────────────────────────────────
const canvas = document.getElementById('particles-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let particles = [];
  let mouse = { x: null, y: null };

  function resizeCanvas() {
    const darkZone = document.querySelector('.dark-zone');
    if (!darkZone) return;
    canvas.width = darkZone.offsetWidth;
    canvas.height = darkZone.offsetHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  window.addEventListener('mousemove', (e) => {
    const darkZone = document.querySelector('.dark-zone');
    if (!darkZone) return;
    const rect = darkZone.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  }, { passive: true });

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.35;
      this.vy = (Math.random() - 0.5) * 0.35;
      this.r = Math.random() * 1.6 + 0.4;
      this.alpha = Math.random() * 0.4 + 0.1;
      const colors = ['99,102,241', '168,85,247', '34,211,238', '236,72,153'];
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
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
      this.vx *= 0.998;
      this.vy *= 0.998;
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
    const count = Math.min(Math.floor((canvas.width * canvas.height) / 14000), 120);
    particles = [];
    for (let i = 0; i < count; i++) particles.push(new Particle());
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
    particles.forEach(p => { p.update(); p.draw(); });
    drawConnections();
    requestAnimationFrame(animateParticles);
  }
  animateParticles();
}

// ─── Terminal Typing Effect ───────────────────────────────────────────────────
const typingEl = document.getElementById('typing-cmd');
if (typingEl) {
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
  let cmdIndex = 0, charIndex = 0, isDeleting = false;

  function typeCmd() {
    const cmd = commands[cmdIndex];
    if (!isDeleting) {
      typingEl.textContent = cmd.substring(0, charIndex);
      charIndex++;
      if (charIndex > cmd.length) {
        isDeleting = true;
        setTimeout(typeCmd, 2200);
        return;
      }
      setTimeout(typeCmd, 45 + Math.random() * 40);
    } else {
      typingEl.textContent = cmd.substring(0, charIndex);
      charIndex--;
      if (charIndex < 0) {
        isDeleting = false;
        charIndex = 0;
        cmdIndex = (cmdIndex + 1) % commands.length;
        setTimeout(typeCmd, 400);
        return;
      }
      setTimeout(typeCmd, 20);
    }
  }
  typeCmd();
}

// ─── Navbar Scroll & Dark Mode Detection ──────────────────────────────────────
const navbar = document.getElementById('navbar');

function updateNavbar() {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Detect if we're in the dark zone
  const darkZone = document.querySelector('.dark-zone');
  if (darkZone) {
    const rect = darkZone.getBoundingClientRect();
    const navBottom = navbar.getBoundingClientRect().bottom;
    if (rect.top <= navBottom && rect.bottom >= navBottom) {
      navbar.classList.add('dark-mode');
    } else {
      navbar.classList.remove('dark-mode');
    }
  }
}
window.addEventListener('scroll', updateNavbar, { passive: true });
updateNavbar();

// ─── Back to Top ──────────────────────────────────────────────────────────────
const backToTopBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  backToTopBtn.classList.toggle('show', window.scrollY > 400);
}, { passive: true });
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ─── Scroll Spy ───────────────────────────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateNavSpy() {
  const scrollPos = window.scrollY + 120;
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const absoluteTop = rect.top + window.scrollY;
    
    if (scrollPos >= absoluteTop && scrollPos < absoluteTop + section.offsetHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${section.id}`) link.classList.add('active');
      });
    }
  });
}
window.addEventListener('scroll', updateNavSpy, { passive: true });
updateNavSpy();

// ─── Reveal on Scroll ─────────────────────────────────────────────────────────
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
reveals.forEach(el => revealObserver.observe(el));

// ─── Skill Bars Animate on Scroll ─────────────────────────────────────────────
const skillFills = document.querySelectorAll('.skill-fill');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target;
      setTimeout(() => { fill.style.width = fill.getAttribute('data-width') + '%'; }, 200);
      skillObserver.unobserve(fill);
    }
  });
}, { threshold: 0.3 });
skillFills.forEach(fill => { fill.style.width = '0'; skillObserver.observe(fill); });

// ─── Project Filter ───────────────────────────────────────────────────────────
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    projectCards.forEach(card => {
      const category = card.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        card.style.display = 'flex';
        card.style.flexDirection = 'column';
        card.style.animation = 'none';
        card.offsetHeight;
        card.style.animation = 'modalSlide 0.3s var(--ease)';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Keyboard for project cards
projectCards.forEach(card => {
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal(card.getAttribute('data-project'));
    }
  });
});

// ─── Modal ────────────────────────────────────────────────────────────────────
const modalOverlay = document.getElementById('modal-overlay');
const modalBox = document.getElementById('modal-box');

function buildCostTable(costTable, company, client, date) {
  let total = costTable.reduce((sum, row) => sum + (row.qty * row.unit), 0);
  const rows = costTable.map(row => `
    <tr><td>${row.desc}</td><td style="text-align:center">${row.qty}</td>
    <td style="text-align:right">B/. ${row.unit.toFixed(2)}</td>
    <td style="text-align:right">B/. ${(row.qty * row.unit).toFixed(2)}</td></tr>`).join('');
  return `
    <div class="modal-section-title">Cotización Formal — RBSEIYA STUDIO</div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:14px;font-size:0.82rem;color:var(--text-secondary);">
      <div><strong>Empresa:</strong> ${company}</div>
      <div><strong>Cliente:</strong> ${client}</div>
      <div><strong>Fecha:</strong> ${date}</div>
    </div>
    <table class="modal-cost-table">
      <thead><tr><th>Descripción</th><th style="text-align:center">Cant.</th>
      <th style="text-align:right">Costo Unit.</th><th style="text-align:right">Subtotal</th></tr></thead>
      <tbody>${rows}
        <tr><td colspan="3" style="text-align:right;font-weight:700;">TOTAL DEL PROYECTO</td>
        <td style="text-align:right;color:var(--accent-blue);">B/. ${total.toFixed(2)}</td></tr>
      </tbody></table>`;
}

function buildAddressTable(addressTable) {
  const rows = addressTable.map(row => `
    <tr><td><code style="font-family:var(--font-mono);font-size:0.8rem;background:rgba(0,0,0,0.04);padding:2px 6px;border-radius:4px">${row.device}</code></td>
    <td>${row.ip}</td><td>${row.mask}</td></tr>`).join('');
  return `
    <div class="modal-section-title">Tabla de Direccionamiento IP</div>
    <table class="modal-cost-table">
      <thead><tr><th>Dispositivo / Interfaz</th><th>Dirección IP</th><th>Máscara de Subred</th></tr></thead>
      <tbody>${rows}</tbody></table>`;
}

function buildTagsHTML(tags) {
  const colors = ['tag-blue', 'tag-violet', 'tag-pink', 'tag-cyan', '', '', ''];
  return tags.map((tag, i) => `<span class="tag ${colors[i % colors.length]}">${tag}</span>`).join(' ');
}

window.currentProjectKey = null;

window.viewPDF = function(url) {
  const container = document.getElementById('tab-archivos');
  container.innerHTML = `
    <div style="margin-bottom: 16px; display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
      <button class="btn btn-outline" style="padding: 6px 14px; font-size: 0.82rem;" onclick="openModal(window.currentProjectKey); setTimeout(()=>document.querySelectorAll('.modal-tab')[1].click(), 50)">← Archivos</button>
      <a href="${url}" target="_blank" class="btn btn-primary" style="padding: 6px 14px; font-size: 0.82rem;">Abrir en nueva pestaña ↗</a>
    </div>
    <div style="width:100%;height:520px;border-radius:10px;overflow:hidden;border:1px solid rgba(0,0,0,0.1);background:#f8f9fa;">
      <object data="${url}" type="application/pdf" width="100%" height="100%" style="display:block;">
        <embed src="${url}" type="application/pdf" width="100%" height="100%" />
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:16px;color:var(--text-muted);text-align:center;padding:32px;">
          <span style="font-size:3rem;">📕</span>
          <p style="font-size:0.95rem;max-width:320px;line-height:1.6;">Tu navegador no puede mostrar el PDF directamente aquí. Usa el botón de arriba para abrirlo.</p>
          <a href="${url}" target="_blank" class="btn btn-primary">Abrir PDF ↗</a>
        </div>
      </object>
    </div>
  `;
};

window.openModal = function(projectKey) {
  window.currentProjectKey = projectKey;
  const p = PROJECTS[projectKey];
  if (!p) return;
  const phasesHTML = p.fases.length ? `
    <div class="modal-section-title">Fases del Proyecto</div>
    <ul style="display:flex;flex-direction:column;gap:8px;margin-left:4px;">
      ${p.fases.map(f => `<li style="font-size:0.88rem;color:var(--text-secondary);padding:8px 12px;background:rgba(0,0,0,0.02);border-radius:var(--radius-sm);border-left:3px solid var(--accent-blue);">${f}</li>`).join('')}
    </ul>` : '';
  const costHTML = p.showCost ? buildCostTable(p.costTable, p.company, p.client, p.date) : '';
  const addrHTML = p.addressTable ? buildAddressTable(p.addressTable) : '';
  const specsHTML = p.specs ? `<div style="font-size:0.83rem;color:var(--text-muted);margin-bottom:8px;font-family:var(--font-mono);">📌 ${p.specs}</div>` : '';

  let filesHTML = '';
  if (p.files && p.files.length > 0) {
    const fileItems = p.files.map(f => {
      let icon = '📄';
      if (f.type === 'folder') icon = '📁';
      if (f.type === 'pdf') icon = '📕';
      if (f.type === 'db') icon = '🗄️';
      if (f.type === 'pkt') icon = '🌐';
      
      let clickAction = '';
      if (f.type === 'pdf' && f.url) {
        clickAction = `onclick="viewPDF('${f.url}')"`;
      } else {
        clickAction = `onclick="alert('El archivo \\n\\n ${f.name} \\n\\nse encuentra en el repositorio del proyecto.')"`;
      }

      return `<div class="file-item" ${clickAction}>
        <div class="file-icon">${icon}</div>
        <div class="file-name">${f.name}</div>
      </div>`;
    }).join('');
    
    filesHTML = `
      <div class="file-explorer">
        ${fileItems}
      </div>
      <p style="font-size:0.8rem; color:var(--text-muted); margin-top:16px; text-align:center;">
        Haz clic en los PDFs para ver el documento oficial directamente aquí.
      </p>
    `;
  } else {
    filesHTML = `<p style="color:var(--text-muted); text-align:center; padding: 40px 0;">No hay archivos públicos disponibles para este proyecto.</p>`;
  }

  modalBox.innerHTML = `
    <div class="modal-thumb" style="background:${p.thumbBg};">${p.emoji}</div>
    <div class="modal-body">
      <div class="modal-header">
        <div>
          <div style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:${p.tagColor};margin-bottom:4px;">${p.category}</div>
          <h2 class="modal-title" id="modal-title-text">${p.title}</h2>
        </div>
        <button class="modal-close" onclick="closeModal()" aria-label="Cerrar">✕</button>
      </div>
      
      <div class="modal-tabs">
        <button class="modal-tab active" onclick="switchModalTab(event, 'info')">📋 Información</button>
        <button class="modal-tab" onclick="switchModalTab(event, 'archivos')">🗂️ Archivos del Proyecto</button>
      </div>

      <div id="tab-info" class="modal-tab-content active">
        ${specsHTML}
        <div class="tag-row">${buildTagsHTML(p.tags)}</div>
        <div class="modal-section-title">El Reto</div>
        <p class="modal-text">${p.reto}</p>
        <div class="modal-section-title">Nuestra Solución</div>
        <p class="modal-text">${p.solucion}</p>
        ${phasesHTML}
        <div class="modal-quote">${p.quote}</div>
        ${costHTML}
        ${addrHTML}
      </div>

      <div id="tab-archivos" class="modal-tab-content">
        ${filesHTML}
      </div>

      <div class="modal-actions" style="margin-top: 24px; border-top: 1px solid rgba(0,0,0,0.05); padding-top: 24px;">
        <button class="btn btn-primary" onclick="closeModal()">← Volver al Portafolio</button>
      </div>
    </div>`;
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => { const c = modalBox.querySelector('.modal-close'); if (c) c.focus(); }, 100);
};

window.switchModalTab = function(event, tabId) {
  document.querySelectorAll('.modal-tab').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.modal-tab-content').forEach(content => content.classList.remove('active'));
  event.currentTarget.classList.add('active');
  document.getElementById('tab-' + tabId).classList.add('active');
};

window.closeModal = function() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
};
modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modalOverlay.classList.contains('open')) closeModal(); });

// ─── Mobile Nav ───────────────────────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

hamburger.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
  mobileNav.setAttribute('aria-hidden', !isOpen);
  mobileNav.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.setAttribute('tabindex', isOpen ? '0' : '-1');
  });
});
mobileNav.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('aria-hidden', 'true');
  });
});

// ─── Contact Form (Removed - Replaced by Conclusiones) ─────────────────────────────────────────────────────────────

// ─── Node Hover Glow Follow Mouse ─────────────────────────────────────────────
document.querySelectorAll('.arch-node').forEach(node => {
  node.addEventListener('mousemove', (e) => {
    const rect = node.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const glow = node.querySelector('.node-glow');
    if (glow) glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(99,102,241,0.08), transparent 60%)`;
  });
});

// ─── Smooth Scroll Offset ─────────────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 76;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navH - 20, behavior: 'smooth' });
  });
});

// ─── Init ─────────────────────────────────────────────────────────────────────
console.log('%c🚀 Portafolio Unificado · Rubén Rodríguez · RBSEIYA STUDIO', 'color:#3b82f6;font-family:monospace;font-size:14px;font-weight:700;');
console.log('%cFront-End + Back-End · UTP Chiriquí · 2026', 'color:#8b5cf6;font-family:monospace;font-size:11px;');
