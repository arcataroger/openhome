import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useWindowSize } from '@vueuse/core';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(SplitText);
const { width, height } = useWindowSize();

// auto scroll to section on click
export const jumpTo = (e) => {
  const os = 50;
  const id = e.target.dataset.id;
  const trg = document.querySelector('div[data-id="' + id + '"]');
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: trg, offsetY: os },
    ease: 'expo.inOut',
  });
};

// turn section class on/off based on scroll position
export const registerSection = (el, os = 0) => {
  const elems = document.querySelectorAll(el);
  elems.forEach((elem) => {
    ScrollTrigger.create({
      trigger: elem,
      start: 'top top+=' + os,
      end: 'bottom top',
      onEnter: () => {
        elem.classList.add('on');
      },
      onEnterBack: () => {
        elem.classList.add('on');
      },
      onLeaveBack: () => {
        elem.classList.remove('on');
      },
      onLeave: () => {
        elem.classList.remove('on');
      },
    });
  });
};

// update side menu with active section
export const setActiveSection = (el, id) => {
  const secs = document.querySelector(el).querySelectorAll('li');
  secs.forEach((sec) => {
    if (sec.dataset.id == id) {
      sec.classList.add('on');
    } else {
      sec.classList.remove('on');
    }
  });
};

// pin side menu while scrolling
export const pinMenu = (el, min) => {
  let mm = gsap.matchMedia();
  mm.add('(min-width: ' + min + 'px)', () => {
    ScrollTrigger.create({
      trigger: '.start-pin',
      endTrigger: '.end-pin',
      start: 'top top',
      end: () => getMenuPos(el),
      pin: el,
      pinSpacing: false,
      anticipatePin: true,
    });
  });
};
const getMenuPos = (cl) => {
  const el = document.querySelector(cl);
  const h = el.offsetHeight;
  let m;
  width.value <= 1440 ? (m = 50) : (m = 75);
  //console.log(m);
  let os = h + m * 2;
  return 'bottom top+=' + os;
};

// toggle class with scroll
export const scrollUpToggle = (el, cl) => {
  const elems = document.querySelectorAll(el);
  elems.forEach((elem) => {
    ScrollTrigger.create({
      trigger: 'body',
      start: 'top top+=-10',
      end: 'bottom bottom',
      onEnter: () => {
        elem.classList.add(cl);
      },
      onLeaveBack: () => {
        elem.classList.remove(cl);
      },
    });
  });
};

// scrolltrigger reveal
export const scrollReveal = () => {
  const elems = document.querySelectorAll('.scroll-reveal');
  elems.forEach((elem) => {
    ScrollTrigger.create({
      id: 'revealed',
      trigger: elem,
      start: 'top 65%',
      onEnter: () => {
        elem.classList.add('on');
      },
    });
  });
};

// play/pause timeline when in view
export const playInView = (el, tl, func, add = 0) => {
  ScrollTrigger.create({
    trigger: el,
    start: 'top bottom',
    end: 'bottom top+=' + -add,
    onEnter: () => {
      //console.log('enter');
      if (tl != undefined) {
        tl.play();
      }
      if (func != undefined) {
        func('enter');
      }
    },
    onEnterBack: () => {
      if (tl != undefined) {
        tl.play();
      }
      if (func != undefined) {
        func('enter');
      }
    },
    onLeave: () => {
      //console.log('leave');
      if (tl != undefined) {
        tl.pause();
      }
      if (func != undefined) {
        func('leave');
      }
    },
    onLeaveBack: () => {
      if (tl != undefined) {
        tl.pause();
      }
      if (func != undefined) {
        func('leave');
      }
    },
  });
};

export const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const labelToScroll = (timeline, label) => {
  let st = timeline.scrollTrigger;
  return (
    st.start +
    (st.end - st.start) * (timeline.labels[label] / timeline.duration())
  );
};

export const isTouchDevice = () => {
  const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
  return isTouchDevice;
};

const hoverSp = 0.5;
const hoverEase = 'power3.out';

export const hoverOnSocial = (e) => {
  if (!isTouchDevice()) {
    const trg = e.target;
    const txt = trg.querySelector('.txt');
    const icon = trg.querySelector('.hover-icon');
    gsap.to(txt, {
      duration: hoverSp,
      yPercent: -100,
      opacity: 0,
      ease: hoverEase,
    });
    gsap.fromTo(
      icon,
      { yPercent: 100 },
      {
        duration: hoverSp,
        yPercent: 0,
        opacity: 1,
        ease: hoverEase,
      }
    );
  }
};
export const hoverOffSocial = (e) => {
  const trg = e.target;
  const txt = trg.querySelector('.txt');
  const icon = trg.querySelector('.hover-icon');
  gsap.to(txt, {
    duration: hoverSp,
    yPercent: 0,
    opacity: 1,
    ease: hoverEase,
  });
  gsap.to(icon, {
    duration: hoverSp,
    yPercent: 100,
    opacity: 0,
    ease: hoverEase,
  });
};

// drop menu toggle open/close
export const toggleDropMenu = (e) => {
  const parent = e.target.closest('.menu-wrap');
  const menu = parent.querySelector('.toggle-menu');

  // open menu
  if (!parent.classList.contains('open')) {
    //console.log('open');
    parent.classList.add('open');

    gsap.fromTo(
      menu,
      { display: 'block', opacity: 0, y: -10 },
      {
        duration: 0.5,
        opacity: 1,
        y: 0,
        ease: 'power3.out',
      }
    );

    // close menu
  } else {
    //console.log('close');
    parent.classList.remove('open');

    gsap.to(menu, {
      duration: 0.5,
      opacity: 0,
      y: -10,
      ease: 'back.in',
    });
  }
};

export const createExcerpt = (
  content,
  maxNumberOfWords,
  trailingIndicator = '...'
) => {
  const listOfWords = content.trim().split(' ');
  const truncatedContent = listOfWords.slice(0, maxNumberOfWords).join(' ');
  const excerpt = truncatedContent + trailingIndicator;
  const output = listOfWords.length > maxNumberOfWords ? excerpt : content;

  return output;
};
