const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  // Reviews carousel — loops in both directions
  const revTrack = document.getElementById('revTrack');
  const revPrev = document.getElementById('revPrev');
  const revNext = document.getElementById('revNext');
  const revDotsWrap = document.getElementById('revDots');

  if (revTrack && revPrev && revNext && revDotsWrap) {
    const revCards = revTrack.querySelectorAll('.rev-card');
    const revCount = revCards.length;
    let revIndex = 0;

    revCards.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'rev-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Go to review ' + (i + 1));
      dot.addEventListener('click', () => goToReview(i));
      revDotsWrap.appendChild(dot);
    });
    const revDots = revDotsWrap.querySelectorAll('.rev-dot');

    function updateCarousel() {
      revTrack.style.transform = `translateX(-${revIndex * 100}%)`;
      revDots.forEach((dot, i) => dot.classList.toggle('active', i === revIndex));
    }
    function goToReview(i) {
      revIndex = i;
      updateCarousel();
    }
    revNext.addEventListener('click', () => {
      revIndex = (revIndex + 1) % revCount;
      updateCarousel();
    });
    revPrev.addEventListener('click', () => {
      revIndex = (revIndex - 1 + revCount) % revCount;
      updateCarousel();
    });
  }