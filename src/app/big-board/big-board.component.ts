import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Image {
  source: string;
  title: string;
  description: string;
  icon: string;
}
@Component({
  selector: 'app-big-board',
  templateUrl: './big-board.component.html',
  styleUrl: './big-board.component.scss',
})
export class BigBoardComponent implements OnInit {
  images: Image[] = [
    {
      source: './assets/feature1.jpg',
      title: 'Streamlined Check-in/Check-out',
      icon: './assets/check-in.png',
      description:
        'Easily track visitor arrivals and departures with a digital registration process, eliminating manual logbooks.',
    },
    {
      source: './assets/feature2.jpg',
      title: 'Visitor Pre-registration',
      icon: './assets/online-registration.png',
      description:
        'Allow expected visitors to pre-register online, saving time and enhancing security.',
    },
    {
      source: './assets/feature3.jpg',
      title: 'Real time Tracking',
      icon: './assets/location.png',
      description:
        'Monitor who is currently on-site, with automatic notifications for authorized personnel',
    },
    {
      source: './assets/feature4.jpg',
      title: 'Secure Access control',
      icon: './assets/secure-shield.png',
      description:
        'Regulate access permissions based on visitor clearance levels, ensuring sensitive areas remain protected',
    },
    {
      source: './assets/feature5.jpg',
      title: 'Automated Notification System',
      icon: './assets/bell.png',
      description:
        'Send instant alerts to residents, staff, or security personnel upon visitor arrival.',
    },
    {
      source: './assets/feature6.jpg',
      title: 'Comprehensive Reporting',
      icon: './assets/dashboard.png',
      description:
        'Generate detailed reports on visitor history, demographics, and more, to inform estate management decisions.',
    },
  ];

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('#article', {
      duration: 1.5,
      y: 100,
      ease: 'power2.inOut',
      opacity: 0,
      scrollTrigger: {
        trigger: '#article',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reset',
      },
    });
    gsap.from('.carousel-container', {
      duration: 1.5,
      y: 100,
      ease: 'power2.inOut',
      opacity: 0,
      delay: 1,
      scrollTrigger: {
        trigger: '#article',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reset',
      },
    });
  }

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

  getVisibleImages() {
    const totalImages = this.images.length;
    return Array.from(
      { length: this.visibleItemsCount },
      (_, i) => this.images[(this.currentIndex + i) % totalImages]
    );
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  gotoSlide(index: number) {
    this.currentIndex = index;
  }
}
