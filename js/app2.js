//------------------------------------------------------------------------
// compra2.html
let form2 = document.getElementById("form2")
form2.style.display="none"
let asignar = document.getElementById("asignarNombres")
let volver = document.getElementById("volver")

asignar.onclick= () =>{
    form2.style.display=""
    asignar.style.display="none"
    volver.style.display="none"
    let labelNombres = document.getElementsByClassName("form-label")
    let nombres = document.getElementsByClassName("form-control")
    let labelDni= document.getElementsByClassName("form-label2")
    let dni = document.getElementsByClassName ("form-control1")
    let cantidadEntradas =localStorage.getItem("cantidadEntradas")
    for(let i=parseInt(cantidadEntradas); i<=nombres.length;i++){
        console.log(i)
        labelNombres[i].style.display="none"
        nombres[i].style.display="none"
        labelDni[i].style.display="none"
        dni[i].style.display="none"
    }
}

