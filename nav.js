document.addEventListener('DOMContentLoaded', function () {
  const pages = [
    { label: 'Das Haus',        href: 'index.html' },
    { label: 'Strände',         href: 'straende.html' },
    { label: 'Ausflüge',        href: 'ausfluege.html' },
    { label: 'Sports & Tipps',  href: 'tipps.html' },
    { label: 'Restaurants',     href: 'restaurants.html' },
    { label: 'Anreise',         href: 'anreise.html' },
    { label: 'Infos für Gäste', href: 'infos.html' },
    { label: 'Kontakt',         href: 'kontakt.html' },
  ];

  const rawSlug = window.location.pathname.split('/').pop() || 'index';
  const current = rawSlug.endsWith('.html') ? rawSlug : rawSlug + '.html';

  const linksHTML = pages.map(p =>
    `<li><a href="${p.href}"${current === p.href ? ' class="active"' : ''}>${p.label}</a></li>`
  ).join('');

  document.body.insertAdjacentHTML('afterbegin', `
<header>
  <div class="nav-inner">
    <a class="nav-logo" href="index.html">Two Beaches</a>
    <button class="nav-toggle" aria-label="Menü öffnen" onclick="this.nextElementSibling.classList.toggle('open')">
      <span></span><span></span><span></span>
    </button>
    <ul class="nav-links">${linksHTML}</ul>
  </div>
</header>`);

  document.body.insertAdjacentHTML('beforeend', `
<footer>
  <ul class="footer-links">
    ${pages.map(p => `<li><a href="${p.href}">${p.label}</a></li>`).join('')}
  </ul>
  <p class="footer-copy">Two Beaches &mdash; Saronischer Golf, Griechenland</p>
</footer>`);
});
