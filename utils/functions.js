import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(SplitText);

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

// turn section on/off based on scroll position
export const registerSection = (el) => {
  const os = 200;
  const elems = document.querySelectorAll(el);
  elems.forEach((elem) => {
    ScrollTrigger.create({
      trigger: elem,
      start: 'top top+=' + os,
      end: 'bottom top',
      onEnter: () => {
        elem.classList.add('on');
        setActiveSection('.side-menu', elem.dataset.id);
      },
      onEnterBack: () => {
        elem.classList.add('on');
        setActiveSection('.side-menu', elem.dataset.id);
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
export const pinMenu = (el) => {
  ScrollTrigger.create({
    trigger: '.start-pin',
    endTrigger: '.end-pin',
    start: 'top top',
    end: 'bottom bottom',
    pin: el,
    pinSpacing: false,
  });
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

// split headline into characters
/* export const splitHeadline = (el) => {
  const spl = new SplitText(el, { type: 'words, chars', charsClass: 'letter' });
  const letters = el.querySelectorAll('.letter');
  gsap.set(letters, { opacity: 0 });
};

// animate each character on
export const animSplitHeadline = (el) => {
  const letters = gsap.utils.toArray(el.querySelectorAll('.letter'));
  gsap.utils.shuffle(letters);
  gsap.to(letters, {
    duration: 0.5,
    opacity: 1,
    y: 0,
    ease: 'quad.out',
    stagger: 0.02,
  });
}; */

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
export const playInView = (el, tl, func, add) => {
  if (add == undefined) {
    add = 0;
  }
  ScrollTrigger.create({
    trigger: el,
    start: 'top bottom',
    end: 'bottom top+=' + -add,
    onEnter: () => {
      //console.log('enter');
      if (tl != '') {
        tl.play();
      }
      if (func != undefined) {
        func('enter');
      }
    },
    onEnterBack: () => {
      if (tl != '') {
        tl.play();
      }
      if (func != undefined) {
        func('enter');
      }
    },
    onLeave: () => {
      if (tl != '') {
        tl.pause();
      }
      if (func != undefined) {
        func('leave');
      }
    },
    onLeaveBack: () => {
      if (tl != '') {
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
