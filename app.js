// Language and media are served in the HTML, never selected from stored preferences.
(() => {
  document.querySelectorAll('a[data-video]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const frame = document.createElement('iframe');
      frame.id = 'gameTrailer';
      frame.src = `${link.dataset.video}&autoplay=1`;
      frame.title = link.dataset.title;
      frame.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
      frame.referrerPolicy = 'strict-origin-when-cross-origin';
      frame.allowFullscreen = true;
      link.replaceWith(frame);
      frame.focus();
    });
  });
  const dialog = document.getElementById('screenshotLightbox');
  const shots = Array.from(document.querySelectorAll('.shots a[data-shot]'));
  if (!dialog || !shots.length || typeof dialog.showModal !== 'function') return;
  const image = document.getElementById('shotLightboxImage');
  const caption = document.getElementById('shotLightboxCaption');
  const close = document.getElementById('shotLightboxClose');
  let index = 0;
  let opener;

  function show(next) {
    index = (next + shots.length) % shots.length;
    const shot = shots[index];
    image.src = shot.href;
    image.alt = shot.querySelector('img').alt;
    caption.textContent = `${image.alt} · ${index + 1} / ${shots.length}`;
    if (!dialog.open) {
      dialog.showModal();
      document.body.classList.add('lightbox-open');
      close.focus();
    }
  }

  shots.forEach((shot, i) => shot.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    opener = shot;
    show(i);
  }));
  close.addEventListener('click', () => dialog.close());
  document.getElementById('shotLightboxPrev').addEventListener('click', () => show(index - 1));
  document.getElementById('shotLightboxNext').addEventListener('click', () => show(index + 1));
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('lightbox-open');
    image.removeAttribute('src');
    opener?.focus({preventScroll: true});
  });
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      show(index + (event.key === 'ArrowLeft' ? -1 : 1));
    }
    if (event.key === 'Tab') {
      const controls = Array.from(dialog.querySelectorAll('button'));
      const first = controls[0], last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
})();
