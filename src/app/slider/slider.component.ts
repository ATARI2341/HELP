import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig  } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']  
})
  
export class SliderComponent implements OnInit {
    
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  texto1 = ["texto de prueba1","texto de prueba2","texto de prueba3"];
    texto2 = ["texto de prueba1","texto de prueba2","texto de prueba3"];
    images1= ['../../assets/materiales/iconos/balanza.svg','../../assets/materiales/iconos/mazo.svg','../../assets/materiales/fotos/f2.jpg'];
  //../../assets/materiales/fotos/f1.jpg
  constructor(private config:NgbCarouselConfig) { 
    config.interval = 5000;
    config.keyboard = true;
    config.pauseOnHover = true; 
  }
 
  
  ngOnInit(): void {
    
  }

}
