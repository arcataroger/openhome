import gsap from 'gsap';

export default function (fullpath, name) {
  gsap.fromTo(
    '.cover',
    { opacity: 1 },
    { duration: 1, opacity: 0, ease: 'power3.inOut' }
  );
  unfreezePage('.wrapper');
  const page_title = useState('page_title');
  page_title.value = name;
}
