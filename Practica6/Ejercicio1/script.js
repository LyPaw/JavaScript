class Libro {
    constructor(titulo, autor, numeroPag) {

        if (titulo === null || titulo === undefined || titulo === "") {
            throw new Error("El titulo no puede estar vacio");
        }

        if (numeroPag <= 0 || numeroPag === null || isNaN(numeroPag)) {
            throw new Error("Numero páginas invalido");
        }

        this.titulo = titulo;
        this.autor = autor;
        this.numeroPag = numeroPag;


    }

    describir() {

        document.body.innerHTML += ("<h1>Titulo : " + this.titulo + "<br><h1>Autor : " + this.autor + "<br><h1>Páginas : " + this.numeroPag);

    }

    exExtenso() {
        if (this.numeroPag >= 300) {
            document.body.innerHTML += ("<h2>El libro es extenso");
        }
    }
}

class Catalogo {
    constructor(...libros) {
        this.libros = libros;
    }

    agregarLibros(libro) {
        this.libros.push(libro);
    }

    eliminarLibro(titulo) {
        for (let i = 0; i < libros.length; i++) {
            if (libro.titulo === titulo) {
                this.libros.splice(i, 1);
            }
        }

    }

    consultarLibro(titulo) {
        for (let i = 0; i < libros.length; i++) {
            if (libro.titulo === titulo) {
                libro.describir();
            }
        }
    }
}


const libros = [];
const libro = new Libro("Prueba", "AutorPrueba", 300);
const libro2 = new Libro("Prueba2", "AutorPrueba2", 299);
const libro3 = new Libro("Prueba3", "AutorPrueba3", 301);

const catalogoEjemplo = new Catalogo(libros);

catalogoEjemplo.agregarLibros(libro);
catalogoEjemplo.consultarLibro("Prueba");

catalogoEjemplo.agregarLibros(libro3);
catalogoEjemplo.consultarLibro("Prueba3");


