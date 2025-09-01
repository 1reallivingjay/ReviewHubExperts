// Mobile menu
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
if (burger && menu) burger.addEventListener('click', () => menu.classList.toggle('open'));

// Set active nav link based on current path
const path = location.pathname.split('/').pop().toLowerCase() || 'index.html';
document.querySelectorAll('.menu a').forEach(a=>{
  const href = a.getAttribute('href').toLowerCase();
  if ((path === '' && href.endsWith('index.html')) || href.endsWith(path)) a.classList.add('active');
});

// Lightbox (gallery.html)
const lb = document.querySelector('.lightbox');
if (lb) {
  const lbImg = lb.querySelector('img');
  document.querySelectorAll('[data-lightbox]').forEach(link=>{
    link.addEventListener('click', e=>{
      e.preventDefault();
      lbImg.src = link.getAttribute('href');
      lb.classList.add('open');
    });
  });
  lb.addEventListener('click', ()=> lb.classList.remove('open'));
}

// Contact form validation (contact.html)
const form = document.querySelector('#contactForm');
if (form) {
  const msg = document.querySelector('.form-msg');
  form.addEventListener('submit', e=>{
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name')?.trim();
    const email = data.get('email')?.trim();
    const subject = data.get('subject')?.trim();
    const message = data.get('message')?.trim();

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email||'');
    if (!name || !emailOk || !subject || !message) {
      msg.textContent = 'Please complete all fields with a valid email.';
      msg.classList.add('show');
      return;
    }
    msg.style.color = '#2ec4b6';
    msg.textContent = 'Thanks! Your message was validated locally. Connect to a backend to send.';
    msg.classList.add('show');
    form.reset();
  });
}
