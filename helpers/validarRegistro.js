/*
querySelectorAll
*/

/*los getElement nos traen un HTML Collection y los querySelectorAll un NodeList*/
let inputs = document.querySelectorAll('.formulario__entrada'); /*en estos casos no se puede usar métodos de array*/
/*Se debe convertir a arreglo*/
let arregloInputs = [...inputs]; //Convertir a un arreglo - expansion iterable
console.log(inputs);


arregloInputs.map((input)=>{
    console.log(arregloInputs);
})

