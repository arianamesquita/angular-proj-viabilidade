import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css']
})
export class SlidesComponent{
	images = [
    'assets/images/2.jpg',
    'assets/images/3.jpg',
    'assets/images/4.jpg',
    'assets/images/5.jpg',
  ];
  currentImageIndex = 1;
  display: boolean = true;

  nextSlide(){
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }
  previousSlide(){
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }

  constructor( private router: Router ){
    this.router.events.subscribe((val) => {
      this.display = this.router.url.includes('home');
    });
  }

}
