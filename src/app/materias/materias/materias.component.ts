import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {


materias:Array<any>=[  
  {imagen:'../../../assets/materiales/f1A.jpg',nombre:'leyes1',descripcion:'esta materia es una gran materia',precio:2000,horas:'80h',color:'../../../assets/materiales/f1A.jpg',color1:'green'},
  {imagen:'../../../assets/materiales/iconos/png/003-peace.png',nombre:'leyes2',descripcion:'esta materia es una gran materia',precio:2000,horas:'80h',color:'../../../assets/materiales/f1A.jpg',color1:'white'},
  {imagen:'../../../assets/materiales/iconos/png/003-peace.png',nombre:'leyes2',descripcion:'esta materia es una gran materia',precio:2000,horas:'80h',color:'../../../assets/materiales/f1A.jpg',color1:'white'},
  {imagen:'../../../assets/materiales/iconos/png/003-peace.png',nombre:'leyes2',descripcion:'esta materia es una gran materia',precio:2000,horas:'80h',color:'../../../assets/materiales/f1A.jpg',color1:'white'},
  {imagen:'../../../assets/materiales/iconos/png/003-peace.png',nombre:'leyes2',descripcion:'esta materia es una gran materia',precio:2000,horas:'80h',color:'../../../assets/materiales/f1A.jpg',color1:'white'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
