class Libro {
    constructor(titulo, autor, numeroPag) {

        if (titulo === null || titulo === undefined || titulo === "") {
            throw new Error("El titulo no puede estar vacio");
        }

        if (autor === null || autor === undefined || autor === "") {
            throw new Error("El autor no puede estar vacio");
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
        } else {
            document.body.innerHTML += ("<h2>El libro no es extenso");
        }
    }
}

class Catalogo {
    constructor(...libros) {
        this.libros = libros;
    }

    existe(libro){
        for(let i = 0; i < this.libros.length; i++){
            if(this.libros[i].titulo.toLowerCase() === libro.titulo.toLowerCase()){
                return true;
            }
        }
    }

    agregarLibros(libro) {
        for (let i = 0; i < this.libros.length; i++) {
            if (this.libros[i] === libro) {
                document.body.innerHTML +=("El libro ya estaba en el catalogo<br>")
                return;
            }
        }
        this.libros.push(libro);
    }

    eliminarLibro(titulo) {
        for (let i = 0; i < this.libros.length; i++) {
            if (this.libros[i].titulo === titulo) {
                this.libros.splice(i, 1);
                return;
            }
        }
        document.body.innerHTML +=("Error al borrar : El libro no esta en el catalogo<br>");
        
    }

    consultarLibro(titulo) {
        for (let i = 0; i < this.libros.length; i++) {
            if (this.libros[i].titulo === titulo) {
                this.libros[i].describir();
                return;
            }
        }
        document.body.innerHTML +=("Error al consultar : El libro no esta en el catalogo<br>");
    }

    listarLibros(){
        for(let i = 0;i < this.libros.length; i++){
            document.body.innerHTML +=(this.libros[i].titulo+"<br>");
        }
    }
}

const libro = new Libro("Prueba", "AutorPrueba", 200);
const libro2 = new Libro("Prueba2", "AutorPrueba2", 299);
const libro3 = new Libro("Prueba3", "AutorPrueba3", 301);

const catalogoEjemplo = new Catalogo();
catalogoEjemplo.agregarLibros(libro);
catalogoEjemplo.agregarLibros(libro);
catalogoEjemplo.agregarLibros(libro2);
catalogoEjemplo.agregarLibros(libro3);
catalogoEjemplo.consultarLibro("Prueba");
catalogoEjemplo.consultarLibro("Pruebawe234124qwe");
catalogoEjemplo.eliminarLibro("Prueba");
catalogoEjemplo.eliminarLibro("Pruebasasasa");
catalogoEjemplo.listarLibros();



