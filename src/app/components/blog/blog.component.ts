import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  arrNoticias: Noticia[] = [];
  newNoticia: Noticia = { titulo: "", imagen: "", texto: "", fecha: "" }

  constructor() {
    this.arrNoticias = new Array(
      {
        titulo: 'Titulo de prueba 1',
        imagen: 'https://picsum.photos/300/300?random=1',
        texto: 'Modernipsum dolor sit amet cubism neo-fauvism systems art hudson river school, barbizon school intervention art cloisonnism young british artists humanism. Secularism neue slowenische kunst hudson river school classicism humanism jugendstil futurism pointilism, modernism merovingian installation art perspectivism historicism. Rayonism pointilism manierism formalism purism, op art russian futurism russian symbolism perspectivism caravaggisti, nonconformism neo-dada maximalism.',
        fecha: '09/07/2023',
      },
      {
        titulo: 'Titulo de prueba 2',
        imagen: 'https://picsum.photos/300/300?random=2',
        texto: 'Purism pre-raphaelites carolingian lowbrow fluxus gothic art photorealism, caravaggisti postmodern art tonalism aestheticism op art, humanism superflat neoclassicism primitivism classicism. Post-painterly abstraction neo-expressionism fluxus superflat dada fauvism bauhaus neo-impressionism, aestheticism post-minimalism existentialism postmodern art nouveau realisme existentialism.',
        fecha: '10/07/2023',
      }
    );
  }
  ngOnInit(): void {
    this.cargarDatos()
  }

  cargarDatos(): string {
    let nuevaNoticia = ""

    
    this.arrNoticias.forEach(Noticia => {
      nuevaNoticia += ` <div class="nueva__noticia"> 
      <h2 class="noticia__titulo">${Noticia.titulo} </h2>
      <div class="noticia__imagen">
        <img src="${Noticia.imagen}" class="noticia__imagen-foto" />
      </div>
      <div class="noticia__texto"
      <p class"noticia__texto-letras>${Noticia.texto}</p> <div>
      <div class="noticia__fecha"
      <p class"noticia__fecha-letras>${Noticia.fecha}</p> <div>
      
      
      
      </div>`
    }
    )
    return nuevaNoticia
  }

  crear(): void {
    if (this.newNoticia.titulo === "" || this.newNoticia.imagen === "" || this.newNoticia.texto === "" || this.newNoticia.fecha === "") {
      window.alert("Todos los campos son necesarios para crear una noticia");
      return;
    }
    this.arrNoticias.push(this.newNoticia);
    this.newNoticia = { titulo: "", imagen: "", texto: "", fecha: "" };
  }

}

