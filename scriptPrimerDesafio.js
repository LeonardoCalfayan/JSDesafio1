
//Desafio simulador

//Se porpone realizar un simulador interactivo de un sitio de e-comerce de una Pastelería

//Las acciones a realiar serán:
//Presentación y saludo al cliente
//Ofrecer los productos
//Recibir las elecciones del cliente y calcular precio total
//Confirmar el pedido y cobrar el servicio

const saludar = () => alert("Bienvenido a PasteLou!") //funcion para saludar

const rubrosDisponibles = () => {
    let rubroID;
    do{
        rubroID = parseInt(prompt("Elegí una de las siguientes categorías por favor: \n 1)Tortas Decoradas\n 2)Pastelería Tradicional\n 3)Rincón Salado"))


    }while(isNaN(rubro) || peliculaID <= 0 || peliculaID >= 3)

    let peliculaTitulo;
    switch(peliculaID){

        case 1:
            peliculaTitulo = "El Padrino"
            break;

        case 2:
            peliculaTitulo = "Harry Potter"
            break;

        case 3:
            peliculaTitulo = "Volver al Futuro"
            break;

        case 4:
            peliculaTitulo = "El Perro"
            break;


    }

    return peliculaTitulo;

}

const calcularPrecio = (peliculaElegida) => {    
    if(peliculaElegida === "El Padrino"){
        return 150;
    }else if(peliculaElegida === "Harry Potter"){
        return 175;
    }else if(peliculaElegida === "Volver al Futuro"){
        return 200;
    }else {
        return 180;
    }

}

let texto = "";
let total = 0;

const informarProducto = (peliculaElegida, precioAlquiler) =>{

    total += precioAlquiler
    texto += `Película: ${peliculaElegida}\n Importe: ${precioAlquiler}\n`;
   // alert(`Usted Lleva:\n ${texto}`);
    
    let seguir = confirm("Desea alquilar otra película")
    if(seguir === true){

        procedimientoAlquilar()
    }else{
        alert("Usted lleva:\n");
        alert(texto);
        alert(`El valore toral es ${total}`)   
    }

}


// const informarProducto = (peliculaElegida, precioAlquiler) =>{

//     let texto = `Película: ${peliculaElegida}\n Importe: ${precioAlquiler}`;
//     alert(`Usted Lleva:\n ${texto}`);

// }

const cobrarServicio = () =>{
    let monto = 0;
    
    do{
        monto = parseInt(prompt("Con cuanto abonará?"));
    }while(isNaN(monto))
    
    if(monto > total){
        alert("Su vuelto es$"+(monto - total))
    }else if(monto === total){
        alert("Gracias por su compra!")
    }else{
        alert("No le alcanza")
    }

    
}

const procedimientoAlquilar = () =>{
    let peliculaElegida = peliculasDisponibles();
    let precioAlquiler = calcularPrecio(peliculaElegida);
    informarProducto(peliculaElegida, precioAlquiler);

}

saludar();

procedimientoAlquilar();

cobrarServicio();