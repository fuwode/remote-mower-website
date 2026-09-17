const videoModal = document.querySelector('.video-modal');

document.querySelectorAll('[data-video-open]').forEach((button) => {
  button.addEventListener('click', () => videoModal.showModal());
});

document.querySelector('[data-video-close]').addEventListener('click', () => videoModal.close());

videoModal.addEventListener('click', (event) => {
  if (event.target === videoModal) videoModal.close();
});

document.querySelector('.inquiry-form').addEventListener('submit', (event) => {
  event.preventDefault();
  event.currentTarget.querySelector('button').innerHTML = 'Request received <span>✓</span>';
});
