import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  arrNoticias: Noticia[] = [];

  constructor() {
    this.arrNoticias = new Array (
      {
        titulo: 'Titulo de prueba 1',
        imagen: 'https://fakeimg.pl/250x100/',
        texto:  'texto de prueba 1 ',
        fecha: '09/07/2023',
      },
      {
        titulo: 'Titulo de prueba 2',
        imagen: 'https://fakeimg.pl/250x100/',
        texto:  'texto de prueba 2',
        fecha: '10/07/2023',
      }
    );
  }
  ngOnInit(): void {
   
  }

  
}
