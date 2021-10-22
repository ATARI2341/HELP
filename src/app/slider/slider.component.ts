import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig  } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']  
})

export class SliderComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images1 = ['../../assets/materiales/fotos/f1.jpg','../../assets/materiales/fotos/f2.jpg','../../assets/materiales/fotos/f3.jpg'];
  constructor(private config:NgbCarouselConfig) { 
    config.interval = 5000;
    config.keyboard = true;
    config.pauseOnHover = true; 
  }
 
  
  ngOnInit(): void {
    
  }

}
