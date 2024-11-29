import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const DURATION_SHORT = 1.2;
const DURATION_LONG = 1.5;
const SLIDE_DISTANCE = 200;

@Component({
  selector: 'app-key-features',
  templateUrl: './key-features.component.html',
  styleUrl: './key-features.component.scss',
})
export class KeyFeaturesComponent implements OnInit {
  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('#mainH4, .innovatingH2', {
      duration: 1.2,
      x: -200,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '#mainH4',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reset',
      },
    });

    gsap.from('.techP ', {
      duration: 1.2,
      x: 200,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '.techP',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reset',
      },
    });
  }

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    const singleContainers = gsap.utils.toArray('.singleContainer');

    gsap.from(singleContainers, {
      duration: 1.5,
      y: 100,
      ease: 'power2.inOut',
      opacity: 0,
      stagger: 0.7,
      scrollTrigger: {
        trigger: '.servicesContainer',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reset',
      },
    });
  }
}
