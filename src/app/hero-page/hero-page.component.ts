import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.scss',
})
export class HeroPageComponent implements OnInit {
  ngOnInit(): void {
    gsap.from('.heroPageArticle, .heroPageP', {
      duration: 1,
      x: 70,
      opacity: 0,
      ease: 'power2.inOut',
      delay: 1,
    });
  }
}
