import { expresiones } from "./expresiones.js";

/*
querySelectorAll (NodeList)
getelemtsByClassName (HTMLCollection)
getelemtsByTagName (HTMLCollection)
*/

/*los getElement nos traen un HTML Collection y los querySelectorAll un NodeList*/
let inputs = document.querySelectorAll('.formulario__entrada'); /*en estos casos no se puede usar métodos de array*/
/*Se debe convertir a arreglo*/
let arregloInputs = [...inputs]; //Convertir a un arreglo - expansion iterable

arregloInputs.map((input)=>{
    input.addEventListener("keyup", (e) =>{
        switch (e.target.id) {
            case "nombre":
                if (expresiones.texto.test(e.target.value)) {
                    e.target.style.borderColor = "green"
                    e.target.style.color = "green"
                } else {
                    document.getElementById("nombre").style.borderColor = "red"
                    document.getElementById("nombre").style.color = "red"
                }
                break;
            case "apellido":
                if (expresiones.texto.test(e.target.value)) {
                    e.target.classList.add("correcto")
                    e.target.classList.remove("incorrecto")
                } else {
                    e.target.classList.add("incorrecto")
                    e.target.classList.remove("correcto")
                }
            break;
            case "documento":
                if (expresiones.numeros.test(e.target.value)) {
                    e.target.classList.add("correcto")
                    e.target.classList.remove("incorrecto")
                } else {
                    e.target.classList.add("incorrecto")
                    e.target.classList.remove("correcto")
                }
            break
        }
        
    })
})

