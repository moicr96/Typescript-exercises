let mensaje: string = 'Hola Mundo';
console.log(mensaje);
//para correrlo abrir la terminal y correr el comando ts-node index.ts

//tipos de datos
let decimal: number = 1.9512;
let entero: number = 2;
let autorizado: boolean=false;

// se pueden crear tipos personalizados:
type mixto = string | number | boolean | string[]
let datosMixtos: mixto[] = ['texto', 69, true, ['lista dentro de otra lista']];

//arreglos
let nums: number[]=[23, 645, 499, 59, 656];
let animals: string[]=['cat', 'dog', 'turtle',];

//mapas, objetos o diccionarios
let jugadores: { [key: number]: string} = {
    10: 'messi',
    7: 'ronaldo '
}

let paises: Record<string, string>={
    EC: 'Ecuador',
    MX: 'México',
    AR: 'Argentina'
};

let emails: Record<string, string[]>={
    'Juan': ['juanito@gmail.com'],
    "ricardo": ['ricardogonzales@gmail.com', 'richie@gmail.com']
};

//constantes 
const pi=3.1416;

//operadores
console.log(4==4);
// console.log(4=='4'); en typescript no se pueden comparar valores de diferente tipo

//condicionales 
let permiso = false;
if (permiso){
    console.log('se permite');
}else{
    console.log('no se permite');
}    

let num: number = 100;
if (num == 99){
    console.log('es 99');
} else if (num===100){
    console.log('es 100');
}else {
    console.log('no es 99 ni 100');
}

type opciones = 'verde' | 'amarillo' | 'rojo'
let color:  string = 'amarillo';
switch (<opciones>color){
    case 'verde':
        console.log('siga');
        break;
    case 'amarillo':
        console.log('precaucion');
        break;
    default:
        console.log('error');
        break;
}



//funciones 
function sumar(primero: number, segundo: number): number {
    return primero + segundo;
}
let resultado= sumar(3,4);
console.log(resultado);

function restar(prim: number, segun: number): void {
    console.log(prim - segun);
}
restar(4,3);

function imprimirPrimero(lista: any[]): void{
    console.log(lista[0]);
}
imprimirPrimero(animals)

function quicksort(lista: number[]): number[]{
    if (lista.length <=1){
        return lista;
    }
    let pivote = lista[0];
    let izq: number[]=[];
    let der: number[]=[];
    for (let i=1; i<lista.length; i++){
        lista[i]<pivote?izq.push(lista[i]):der.push(lista[i]);
    }
    return quicksort(izq).concat(pivote,quicksort(der));
};
let numeros: number[]=[23, 45, 16, 37, 3, 99, 22];
let listaOrdenada: number[]=quicksort(numeros);
console.log(listaOrdenada);


//ciclos
let animales: string[]=['perro','gato','tigre'];
for (let animal of animales){
    console.log(animal);
}

let prueba: number = 0;
let emergencia: number = 2;
while (prueba<=emergencia){
    console.log(prueba);
    prueba++
}

//POO
interface Lenguaje {
    nombre: string;
    year?: number;
    description: Function;
}
let javascript: Lenguaje={
    nombre: 'javascript',
    year: 1995,
    description: function(){
        console.log(`${this.nombre} fue creado en ${this.year}`);
    }
}
javascript.description();


interface Lenguaje {
    nombre: string;
    year?: number;
    description: Function;
}
class Lang implements Lenguaje {
    nombre: string
    year: number;
    constructor(nombre: string, year: number){
        this.nombre=nombre;
        this.year=year;
    }
    description(){
        console.log(`${this.nombre} fue creado en ${this.year}`);
    }
}
let html = new Lang('html',1993);
html.description();

import { mult } from "./modulo1";
mult(2,2);
