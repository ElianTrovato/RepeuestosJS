//Entradas
var nombre = prompt("Ingresá tu nombre");
    if ((nombre == "") || (nombre == " ")) {
        alert("Por favor, completar este campo")
    }
var apellido = prompt("Ingresá tu apellido");
    if ((apellido == "") || (nombre == " ")) {
        alert("Por favor, completar este campo")
    }

//Saludo
const para9 = document.createElement("p");
const node9 = document.createTextNode("Hola " + nombre + " " + apellido + ", bienvenido a nuestro sitio");
para9.appendChild(node9);


document.getElementById("saludo").appendChild(para9);

//Cargando Articulos
var elementoPadre = $('#prueba');
console.log('prueba= ',elementoPadre);

//Traer los datos
var productosJson = [{ 
                        id: 'scubiertas', 
                        imagen: 'repuestos/1/cubiertas.jpg', 
                        descripcion: 'Cubiertas',
                        boton: "boton1"
                    },
                    { 
                        id: 'sembragues', 
                        imagen: 'repuestos/2/embragues.jpg', 
                        descripcion: 'Embragues',
                        boton: 'boton2'
                    },
                    { 
                        id: 'sfrenos', 
                        imagen: 'repuestos/3/frenos.jpg', 
                        descripcion: 'Frenos',
                        boton: 'boton3'
                    },
                    { 
                        id: 'scajas', 
                        imagen: 'repuestos/4/cajas.jpg', 
                        descripcion: 'Caja',
                        boton: 'boton4'
                    },
                    { 
                        id: 'sescapes', 
                        imagen: 'repuestos/5/escapes.jpg', 
                        descripcion: 'Escapes',
                        boton: 'boton5'
                    },
                    { 
                        id: 'samortiguadores', 
                        imagen: 'repuestos/6/amortiguadores.jpg', 
                        descripcion: 'Amortiguadores',
                        boton: 'boton6'
                    },
                    { 
                        id: 'sbieletas', 
                        imagen: 'repuestos/7/Bieletas.jpg', 
                        descripcion: 'Bieletas',
                        boton: 'boton7'
                    },
                    { 
                        id: 'sradiador', 
                        imagen: 'repuestos/8/radiadores.jpg', 
                        descripcion: 'Radiador',
                        boton: 'boton8'
                    },
                    { 
                        id: 'scarter', 
                        imagen: 'repuestos/9/carter.jpg', 
                        descripcion: 'Carter',
                        boton: 'boton9'
                    }];


//Iterarlos y agregarlos con append

for (let producto of productosJson){
    var elementoHijo = " <div class='col margen2' id="+ producto.id +"'> " +
                        "<img src="+ producto.imagen +" alt='cubiertas' width='300px' height='300px'> " +
                        "<p class='descripcion'>"+ producto.descripcion +"</p> " +
                        "</a> " +
                        "<p class='seña'>Para comprar hacer click acá:</p> " +
                        "<script src='https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js' " +
                        "data-preference-id='423137396-e47a1f95-8116-47d3-b7be-ce74e65ecd52' data-source='button'> " +
                        "</script> " +
                        "<input id='cantidad' type='number'> " +
                        "<button id="+ producto.boton +">Agregar al Carrito</button> " +
                        " </div>";

    elementoPadre.append(elementoHijo);

}


//Ingreso Mercaderia
var ingresoCubiertas = 150
var ingresoCaja = 200
var ingresoEmbrague = 560
var ingresoFrenos = 940
var ingresoEscapes = 420
var ingresoAmortiguadores = 240
var ingresoBieletas = 860
var ingresoRadiador = 742
var ingresoCarter = 654


//Suma mercaderias existentes e ingresos
var cubiertas = (50 + ingresoCubiertas);
var caja = (90 + ingresoCaja);
var embrague = (130 + ingresoEmbrague);
var frenos = (150 + ingresoFrenos);
var escapes = (80 + ingresoEscapes);
var amortiguadores = (90 + ingresoAmortiguadores);
var bieletas = (530 + ingresoBieletas);
var radiador = (400 + ingresoRadiador);
var carter = (273 + ingresoCarter);

//Precio Mercaderia Unitario

var precioCubiertas = 10000;
var precioCaja = 8000;
var precioEmbrague = 16000;
var precioFrenos = 12000;
var precioEscapes = 20000;
var precioAmortiguadores = 15000;
var precioBieletas = 8000;
var precioRadiador = 23000;
var precioCarter = 25000;

//Precio Mercaderia Total

var precioTotalCubiertas = (precioCubiertas * cubiertas);
var precioTotalCaja = (precioCaja * caja);
var precioTotalEmbrague = (precioEmbrague * embrague);
var precioTotalFrenos = (precioFrenos * frenos);
var precioTotalEscapes = (precioEscapes * escapes);
var precioTotalAmortiguadores = (precioAmortiguadores * amortiguadores);
var precioTotalBieletas = (precioBieletas * bieletas);
var precioTotalRadiador = (precioRadiador * radiador);
var precioTotalCarter = (precioCarter * carter);

//Stock Total

var stock = (cubiertas + caja + embrague + frenos + escapes + amortiguadores + bieletas + radiador + carter);

//Precio Sin IVA

var precioUnitario = (precioTotalCubiertas + precioTotalCaja + precioTotalEmbrague + precioTotalFrenos + precioTotalEscapes + precioTotalAmortiguadores + precioTotalBieletas + precioTotalRadiador + precioTotalCarter);

//IVA

var iva = ((precioUnitario * 21)/100);

//Precio con IVA Incluido

var precioFinal = (precioUnitario + iva);




//Declarando funciones

function stockTotal() {
    console.log("El total de tu stock es de " + stock)
}  
function precioNeto() {
    console.log("El precio neto de tu stock es de " + precioUnitario)
}  
function precioTotal() {
    console.log("El precio total de tu stock es de " + precioFinal)
} 

stockTotal() ;
precioNeto() ;
precioTotal() ;

//Creando Array - Proveedores

class Proveedores{
    constructor(nombre, cuit, direccion) {
        this.nombre = nombre;
        this.cuit = cuit;
        this.direccion = direccion;
    }
    especificar() {
        console.log(this.nombre + " con cuit " + this.cuit + " tiene direccion en " + this.direccion);
    } 
}
const proveedor1 = new Proveedores("Pirelli S.R.L", "33-65415236-2", "Av. Juan B Justo 2150");
const proveedor2 = new Proveedores("Peugeot S.A.", "30-04152165-7", "Av. Corrientes 3546");
const proveedor3 = new Proveedores("Citroen S.A.", "33-45865321-5", "Av. Alvarez Jonte 1254");
const proveedor4 = new Proveedores("Brindgstone S.A.", "30-32156324-6", "Av. Rivadavia 25032");
const proveedor5 = new Proveedores("Renault S.A.", "30-12635987-2", "Av. Warnes 5642");
const proveedor6 = new Proveedores("Fiat S.A.", "33-66995522-7", "Av. Cordoba 1002");

proveedor1.especificar();
proveedor2.especificar();
proveedor3.especificar();
proveedor4.especificar();
proveedor5.especificar();
proveedor6.especificar();


//Filtrando Datos

const repuestosStock = [{ id: 1, nombre: "cubiertas", cantidadStock: cubiertas, precio: 10000 },
                        { id: 2, nombre: "embragues", cantidadStock: embrague,precio: 16000 },
                        { id: 3, nombre: "frenos", cantidadStock: frenos ,precio: 12000 },
                        { id: 4, nombre: "caja", cantidadStock: caja, precio: 8000 },
                        { id: 5, nombre: "escape", cantidadStock: escapes ,precio: 20000 },
                        { id: 6, nombre: "amortiguadores", cantidadStock: amortiguadores, precio: 15000 },
                        { id: 7, nombre: "bieletas", cantidadStock: bieletas, precio: 8000 },
                        { id: 8, nombre: "radiador", cantidadStock: radiador, precio: 23000 },
                        { id: 9, nombre: "carter", cantidadStock: carter, precio: 25000 }];

                        for (const repuestos of repuestosStock) {
                            console.log(repuestos.id)
                            console.log(repuestos.nombre)
                            console.log(repuestos.cantidadStock) 
                        }




const bajoStock = repuestosStock.filter(nombre => nombre.cantidadStock < 20); 
console.log(bajoStock);



let cantidad = $("#cantidad")
    
//Creando Eventos y Animaciones
console.log("Iniciar Evento")
for (const repuestos of repuestosStock) {
        $(`#boton${repuestos.id}`).click(); 
        $(`#boton${repuestos.id}`).click(function() {
            $("#carro").show();
            $("#lista").append( `<li> ${repuestos.nombre}______________ $${repuestos.precio}</li>`);
            $("#botonesCarrito").show()    
            $("#mostrar").show();
            $("#divCarrito").show();    
        })
}       

$(`#borrarCarro`).click();
$(`#borrarCarro`).click(function(){
    $(`#lista`).empty()
});




$("#mostrar").click();
                $("#mostrar").click(function() {
                $("#carro").toggle();
                $("#divCarrito").toggle();
            })
console.log("Finalizando evento")

//Modificando el CSS con JQuery

$("#precioCarro").css({  "text-align": "right"});

$("#lista").css({  "font-family": "Georgia, 'Times New Roman', Times, serif;", 
                    "color": "black" });

//enviando datos a una API con ajax

const URLGET   = "https://jsonplaceholder.typicode.com/posts"
const infoPost =  { nombre: "Lucas", apellido: "Rodriguez"}
$("#botonPie").prepend('<button id="btnEnviar">POST</button>');
$("#btnEnviar").click(() => {
    $.post(URLGET, infoPost ,(respuesta, estado) => {
        if(estado === "success"){
            $("body").prepend(`<div>
                                 Guardado:${respuesta.nombre} ${respuesta.apellido}
                                </div>`);
        }  
    });
});

