import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';

interface Image {
  source: string;
  name: string;
  title: string;
}

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrl: './team-page.component.scss',
})
export class TeamPageComponent implements OnInit {
  images: Image[] = [
    {
      source: './assets/techie1.png',
      name: 'Abdulganiyy Ajayi',
      title: 'Product Manager',
    },
    {
      source: './assets/techie2.png',
      name: 'Chiamaka Ajaka',
      title: 'Product Designer',
    },
    {
      source: './assets/techie3.png',
      name: 'Okechukwu Omeh',
      title: 'Front-End Lead',
    },
    {
      source: './assets/techie4.png',
      name: 'Kamal Aminu',
      title: 'Back-End Lead',
    },
    {
      source: './assets/techie6.png',
      name: 'Chioke J. Frances',
      title: 'Front-End Developer',
    },
    {
      source: './assets/techie4.png',
      name: 'Abraham Chimdiebube',
      title: 'Back-End Developer',
    },
  ];

  ngOnInit(): void {}

  currentIndex = 0;
  visibleItemsCount = 3;
  mobileItemsCount = 6;

  getMobileImages() {
    const totalImages = this.images.length;
    return Array.from(
      { length: this.mobileItemsCount },
      (_, i) => this.images[(this.currentIndex + i) % totalImages]
    );
  }

  getVisibleImages(): Image[] {
    const startIndex = this.currentIndex * 3;
    const endIndex = startIndex + 3;
    return this.images.slice(startIndex, endIndex);
  }

  nextSlide(): void {
    this.currentIndex++;
    if (this.currentIndex >= Math.ceil(this.images.length / 3)) {
      this.currentIndex = 0;
    }
  }

  prevSlide(): void {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = Math.ceil(this.images.length / 3) - 1;
    }
  }

  gotoSlide(index: number) {
    this.currentIndex = index;
  }

  // ngAfterViewInit(): void {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const carouselItem = gsap.utils.toArray('.carousel-item');

  //   gsap.from(carouselItem, {
  //     duration: 1.5,
  //     x: 100,
  //     ease: 'power2.inOut',
  //     opacity: 0,
  //     stagger: 0.5,
  //     scrollTrigger: {
  //       trigger: '.carouselSection',
  //       start: 'top 80%',
  //       end: 'bottom 20%',
  //       toggleActions: 'play none none reset',
  //     },
  //   });
  // }

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    const carouselItems = gsap.utils.toArray('.carousel-item');

    gsap.from(carouselItems, {
      duration: 1,
      x: 50,
      y: 0,
      ease: 'power2.inOut',
      opacity: 0, // fade in
      stagger: 0.2, // stagger the animation by 0.2 seconds
    });
  }
}
