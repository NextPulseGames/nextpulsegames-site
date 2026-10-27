(() => {
  const img = document.querySelector('.hero-brand-visual img');
  if (!img) return;

  Promise.all(
    [0, 1, 2, 3, 4].map(i =>
      fetch('/assets/brand/banner-20261027/part' + i + '.txt', { cache: 'force-cache' })
        .then(response => {
          if (!response.ok) throw new Error('Failed to load banner part ' + i);
          return response.text();
        })
    )
  ).then(parts => {
    img.removeAttribute('srcset');
    img.removeAttribute('sizes');
    img.width = 768;
    img.height = 432;
    img.src = 'data:image/webp;base64,' + parts.join('');
  }).catch(() => {
    // Keep the existing banner as a safe fallback if any part cannot be loaded.
  });
})();
