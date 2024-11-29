import { Component } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Question1 {
  title: string;
  answer: string;
  isOpen: boolean;
}
interface Question2 {
  title: string;
  answer: string;
  isOpen: boolean;
}
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {
  questions1: Question1[] = [
    {
      title: 'What are the benefits of using this system?',
      answer:
        'Our system streamlines visitor management, enhancing security and efficiency. It also provides valuable insights into visitor activity.',
      isOpen: false,
    },
    {
      title: "Is it customizable to fit my estate's specific needs?",
      answer:
        "Yes, our system adapts to your estate's unique requirements. Customizable plans ensure a seamless integration.",
      isOpen: false,
    },
    {
      title: 'How does it handle visitor check-in/check-out?',
      answer:
        'Our system uses secure digital registration and automated check-in/check-out. Visitors can easily register and receive approval notifications.',
      isOpen: false,
    },
    {
      title: 'Can it send notifications to staff/management?',
      answer:
        'Yes, our system sends customizable alerts via email/SMS. Approved visitors trigger automatic notifications',
      isOpen: false,
    },
    {
      title: 'How secure is the system?',
      answer:
        'Our system uses end-to-end encryption and regular security audits. GDPR compliance ensures visitor data protection.',
      isOpen: false,
    },
    {
      title: 'Who has access to visitor data?',
      answer:
        'Authorized personnel only have access, with role-based access control. Strict protocols safeguard sensitive information.',
      isOpen: false,
    },
  ];
  questions2: Question2[] = [
    {
      title: 'What training and support do you offer?',
      answer:
        'We provide comprehensive onboarding, documentation, and dedicated support. Our team ensures seamless integration.',
      isOpen: false,
    },

    {
      title: 'What are the pricing options?',
      answer:
        'Customized plans base pricing on estate size and features. Scalable pricing accommodates growing needs.',
      isOpen: false,
    },
    {
      title: 'Are there any additional fees (support, updates)?',
      answer:
        'No hidden fees; inclusive support and updates. Transparent pricing ensures budget clarity.Scalability and Integration',
      isOpen: false,
    },
    {
      title: "Can the system grow with my estate's needs?",
      answer:
        'Yes, scalable architecture ensures seamless expansion. Our system adapts to growing demands.',
      isOpen: false,
    },
    {
      title: 'Can I see success stories/case studies?',
      answer: "It's showing in our Testimonials section",
      isOpen: false,
    },
    {
      title: 'What do existing clients say about the system?',
      answer:
        "Clients praise our system's ease of use, security, and efficiency gains. Positive feedback highlights system value.",
      isOpen: false,
    },
  ];

  toggleAccordion(questions1: Question1) {
    questions1.isOpen = !questions1.isOpen;
  }
  toggleAccordion2(questions2: Question2) {
    questions2.isOpen = !questions2.isOpen;
  }

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    const accordionElements1 = gsap.utils.toArray('.accordion1 .accordion');
    const accordionElements2 = gsap.utils.toArray('.accordion2 .accordion');

    accordionElements1.forEach((element1, index) => {
      const element2 = accordionElements2[index];

      gsap.from([element1, element2], {
        duration: 1.5,
        y: 50, // slide up from 50px below
        ease: 'power2.inOut',
        opacity: 0, // fade in
        delay: index * 0.5, // 5ms delay between each pair of elements
        scrollTrigger: {
          trigger: '.flexAccordion',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reset',
        },
      });
    });
  }
}
