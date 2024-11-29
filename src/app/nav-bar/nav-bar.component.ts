import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import gsap from 'gsap';

interface MenuItem {
  label: string;
  hasDropdown?: boolean;
  dropdownItems?: string[];
  id: any;
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  hasDropdown = false;
  menuItems: MenuItem[] = [
    {
      label: 'Home',
      id: 'home',
      hasDropdown: true,
      dropdownItems: ['Home1', 'Home2', 'Home3', 'Home4'],
    },

    {
      label: 'Features',
      id: 'features',
      hasDropdown: true,
      dropdownItems: ['About1', 'About2', 'About3', 'About4'],
    },
    {
      label: 'About Us',
      id: 'aboutus',

      hasDropdown: true,
      dropdownItems: ['Services1', 'Services2', 'Services3', 'Services4'],
    },
    {
      label: 'Projects',
      id: 'projects',

      hasDropdown: true,
      dropdownItems: ['Contact1', 'Contact2'],
    },
    {
      label: 'Services',
      id: 'services',

      hasDropdown: true,
      dropdownItems: ['Contact1', 'Contact2'],
    },
  ];

  isDropdownShown: { [key: string]: boolean } = {};

  showDropdown(event: any, menuItem: MenuItem) {
    if (menuItem.hasDropdown) {
      this.isDropdownShown[menuItem.label] = true;
    }
  }

  hideDropdown(event: any, menuItem: MenuItem) {
    if (menuItem.hasDropdown) {
      this.isDropdownShown[menuItem.label] = false;
    }
  }

  scrolled = false;
  mobileScrolled = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    // For desktop navbar
    this.scrolled = scrollY > 50;

    // For mobile navbar
    this.mobileScrolled = scrollY > 50;
  }

  mobileNavOpen = false;

  toggleMobileNav() {
    this.mobileNavOpen = !this.mobileNavOpen;
  }

  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.mobileNavOpen = false;
  }
}
