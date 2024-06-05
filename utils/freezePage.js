import gsap from 'gsap';

export const freezePage = (el) => {
  const scrollY = window.scrollY;
  const wrapper = document.querySelector(el);
  wrapper.classList.add('change');
  gsap.set(el, { top: -scrollY });
};
export const unfreezePage = (el) => {
  const wrapper = document.querySelector(el);
  wrapper.classList.remove('change');
  wrapper.style.top = '';
};
