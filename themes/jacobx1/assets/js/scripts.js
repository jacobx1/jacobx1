$(function() {
  $(".prettySocial").prettySocial();

  const pastScrollPos = pix =>
    document.body.scrollTop > pix || document.documentElement.scrollTop > pix;

  const withinScrollPos = pix =>
    document.body.scrollTop < pix && document.documentElement.scrollTop < pix;

  window.onscroll = () => {
    const sidebar = document.getElementsByClassName('sidebar')[0];
    if (pastScrollPos(180)) {
      if (!sidebar.classList.contains('scrolled')) {
        sidebar.classList.add('scrolled');
      }
    } else if (withinScrollPos(10)) {
      sidebar.classList.remove('scrolled');
    }
  };

  document.getElementById('back-to-top').onclick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
});
