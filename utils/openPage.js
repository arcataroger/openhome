import gsap from 'gsap';

export default function (fullpath, name) {
  // remove cover
  gsap.fromTo(
    '.cover',
    { opacity: 1 },
    { delay: 0, duration: 0.5, opacity: 0, ease: 'power3.inOut' }
  );

  // move logo into place
  /*   gsap.to('.logo-main', { duration: 1, y: 0, ease: 'expo.inOut' });

  // slide contents into place
  gsap.fromTo(
    '.hero',
    { y: 50 },
    { delay: 0.5, duration: 0.5, y: 0, ease: 'power3.out' }
  ); */

  // add on header parts

  // reset
  unfreezePage('.wrapper');
  const page_title = useState('page_title');
  page_title.value = name;
}
