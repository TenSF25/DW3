class Cantante {
    static id = 1;
    constructor(nombreArtistico, nombreCompleto, edad, genero, pais, canciones) {
        this.nombreArtistico = nombreArtistico;
        this.nombreCompleto = nombreCompleto;
        this.edad = edad;
        this.genero = genero;
        this.pais = pais;
        this.canciones = canciones;
        this.id = Cantante.id++;
    }
}

const cantante1 = new Cantante("Charly García", "Carlos Alberto García", 71, "Rock", "Argentina", ["Demoliendo Hoteles", "Nos siguen pegando Abajo", "No voy en Tren"]);
const cantante2 = new Cantante("Bad Bunny", "Benito Antonio Martínez Ocasio", 29, "Urbano Latino", "Puerto Rico", ["WHERE SHE GOES", "120", "Ojitos Lindos"]);
const cantante3 = new Cantante("Harry Styles", "Harry Edward Styles", 29, "Pop", "Reino Unido", ["As it Was", "Sign of the Times", "Adore You"]);
const cantante4 = new Cantante("Bruno Mars", "Peter Gene Hernández", 37, "Pop", "Estados Unidos", ["Leave The Door Open", "Treasure", "When I Was Your Man"]);
const cantante5 = new Cantante("Dillom", "Dylan León Masa", 22, "Urbano Latino", "Argentina", ["LA PRIMERA", "220", "Sauce"]);

const cantantes = [
    cantante1,
    cantante2,
    cantante3,
    cantante4,
    cantante5
];

console.log(cantantes)

cantantes.forEach((cantante) => {
    const divContenedor = document.getElementById("contenedor");
    const divCantantes = document.createElement("div");
    const nombre = document.createElement("h1");
          nombre.textContent = cantante.nombreCompleto;

    const artistico = document.createElement("h2");
          artistico.textContent = "Mejor conocido como " + cantante.nombreArtistico;

    const edadCantante = document.createElement("p");
          edadCantante.textContent = "Edad " + cantante.edad;

    const generoCantante = document.createElement("p");
          generoCantante.textContent = "Genero Musical " + cantante.genero;

    const paisCantante = document.createElement("p");
          paisCantante.textContent = "País de Nacimiento " + cantante.pais;

    const cancionesCantante = document.createElement("ul");
          cancionesCantante.textContent = "Entre sus canciones estan"
          cantante.canciones.forEach((cancion) => {
            const liCancion = document.createElement("li");
            liCancion.textContent = cancion;

            cancionesCantante.appendChild(liCancion);
          })


    const bContratado = document.createElement("button");
    bContratado.textContent = "Contratar"
    bContratado.setAttribute("id", cantante.id)

    divCantantes.appendChild(nombre);
    divCantantes.appendChild(artistico);
    divCantantes.appendChild(edadCantante);
    divCantantes.appendChild(generoCantante);
    divCantantes.appendChild(paisCantante);
    divCantantes.appendChild(cancionesCantante);
    divCantantes.appendChild(bContratado);

    divContenedor.appendChild(divCantantes);

})

const convertidor = JSON.stringify(cantantes);
console.log(convertidor);