import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function animate(appRef: React.RefObject<HTMLElement>, heroRef: React.RefObject<HTMLElement>, nameRef: React.RefObject<HTMLElement>, bioRef: React.RefObject<HTMLElement>, laptopRef: React.RefObject<HTMLElement>, infoRef: React.RefObject<HTMLElement>) {
 const app = appRef.current;
 const hero = heroRef.current;
 const name = nameRef.current;
 const bio = bioRef.current;
 const laptop = laptopRef.current;
 const info = infoRef.current;

 const tl = gsap.timeline({ delay: 1 });

 tl.fromTo(hero, { opacity: 0, x: 200 }, { opacity: 1, x: 0 })
  .fromTo(name, { y: -10, opacity: 0, delay: 1 }, { y: 10, opacity: 1 })
  .fromTo(bio, { y: -10, opacity: 0 }, { y: 10, opacity: 1 })
  .fromTo(laptop, { y: 20, opacity: 0 }, { y: 10, opacity: 1 })
  .fromTo(info, { y: 20, opacity: 0 }, { y: 10, opacity: 1 });

 ScrollTrigger.create({
  trigger: app,
  start: 'top 80%',
  animation: tl,
  toggleActions: 'play none none none',
 });
}

export function createScrollTrigger(
 ref: React.RefObject<HTMLElement>,
 animation: gsap.core.Timeline,
 start: string,
) {
 ScrollTrigger.create({
  trigger: ref.current,
  animation,
  toggleActions: 'play none none none',
  start,
 });
}

export function createTitleAnimation(titleRef: React.RefObject<HTMLElement>) {
 return gsap.fromTo(
  titleRef.current,
  { autoAlpha: 0, y: 20 },
  { duration: 1, autoAlpha: 1, y: 0 }
 );
}

export function createParagraphAnimation(paragraphRef: React.RefObject<HTMLElement>) {
 return gsap.fromTo(
  paragraphRef.current,
  { autoAlpha: 0, y: 10 },
  { duration: 1, autoAlpha: 1, y: 0 }
 );
}

export function createButtonAnimation(buttonRef: React.RefObject<HTMLElement>) {
 return gsap.fromTo(
  buttonRef.current,
  { autoAlpha: 0, y: 10 },
  { duration: 1, autoAlpha: 1, y: 0 }
 );
}

export function createDescriptionAnimation(purposeRef: React.RefObject<HTMLElement>) {
 return gsap.fromTo(
  purposeRef.current,
  { autoAlpha: 0, y: 10 },
  { duration: 1, autoAlpha: 1, y: 0 }
 );
}

export function createImageAnimation(imageRef: React.RefObject<HTMLElement>) {
 return gsap.fromTo(
  imageRef.current,
  { autoAlpha: 0, y: 10 },
  { duration: 1, autoAlpha: 1, y: 0 }
 );
}