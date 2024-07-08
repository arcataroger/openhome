import gsap from 'gsap';

export default function (fullpath, name) {
  // remove cover
  gsap.fromTo(
    '.cover',
    { opacity: 1 },
    { delay: 0.5, duration: 0.5, opacity: 0, ease: 'power3.inOut' }
  );

  // move logo into place
  const logo = document.getElementById('logo-main');
  const page_theme = useState('page_theme');
  gsap.to(logo, {
    duration: 0.75,
    x: 0,
    y: 0,
    ease: 'power3.inOut',
    onComplete: () => {
      logo.classList.remove('dk', 'lt', 'fixed');
      logo.classList.add(page_theme.value);
    },
  });

  // slide contents into place
  gsap.fromTo(
    '.hero',
    { y: 50 },
    { delay: 0.5, duration: 1, y: 0, ease: 'expo.out' }
  );

  // add on header parts
  gsap.to('.header-part', {
    delay: 0.5,
    duration: 0.5,
    opacity: 1,
    y: 0,
    stagger: 0.2,
    ease: 'power3.out',
  });

  // reset
  unfreezePage('.wrapper');
  const page_title = useState('page_title');
  page_title.value = name;
}
