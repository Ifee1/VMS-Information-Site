import { Component } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-pricing-page',
  templateUrl: './pricing-page.component.html',
  styleUrl: './pricing-page.component.scss',
})
export class PricingPageComponent {
  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    const pricingBoxes = gsap.utils.toArray('.pricingBox');

    gsap.from(pricingBoxes, {
      duration: 1.5,
      y: 100,
      ease: 'power2.inOut',
      opacity: 0,
      stagger: 0.5,
      scrollTrigger: {
        trigger: '.pricingContainer',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reset',
      },
    });
  }
}
