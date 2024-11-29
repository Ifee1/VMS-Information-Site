import { Component } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.scss',
})
export class BenefitsComponent {
  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.imageContainer', {
      duration: 1.5,
      x: -100,
      ease: 'power2.inOut',
      opacity: 0,
      scrollTrigger: {
        trigger: '.imageContainer',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reset',
      },
    });
    gsap.from('.textContainer', {
      duration: 1.5,
      x: 100,
      ease: 'power2.inOut',
      opacity: 0,
      delay: 1,
      scrollTrigger: {
        trigger: '.textContainer',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reset',
      },
    });
  }
}
