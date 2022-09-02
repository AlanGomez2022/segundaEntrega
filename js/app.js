const CAMPOGRAL = 9000
const CAMPODELANTERO = 15000
const CLUB = 0.15
const COSTOS = 2000

//------------------------------------------------------------------
//compra.hmtl
let campoGral = document.getElementById("campoGeneral");
let campoDelantero =document.getElementById("campoDelantero");
let cuadroInfo = document.getElementById("cuadroInfo");
let form= document.getElementById("form");
form.style.display="none" // ESTO HACE QUE DESAPAREZCA EL HTML 

campoDelantero.onclick = () => {
    form.style.display="" //vuelve a verse el formulario
    localStorage.setItem("sector", "delantero")
    let tituloCampo = document.getElementById("tituloCampo");
    tituloCampo.innerText=` C A M P O    ---       D E L A N T E R O `
    let valorNormal = document.getElementById("valorNormal")
    let conDescuento=document.getElementById("conDescuento")
    valorNormal.innerText=` NORMAL: \n $ ${CAMPODELANTERO} + $ ${COSTOS} (Costos de servicio) `
    conDescuento.innerText= `Con CLUB PERSONAL: \n $ ${CAMPODELANTERO-CAMPODELANTERO*CLUB} + $ ${COSTOS-COSTOS*CLUB} (Costos de servicio)`
   
}
campoGral.onclick = () => {
    form.style.display="" //vuelve a verse el formulario
    localStorage.setItem("sector", "general")
    let tituloCampo = document.getElementById("tituloCampo");
    tituloCampo.innerText=` C A M P O    ---      G E N E R A L `
    let valorNormal = document.getElementById("valorNormal")
    let conDescuento=document.getElementById("conDescuento")
    valorNormal.innerText=` NORMAL: \n$ ${CAMPOGRAL} + $ ${COSTOS} (Costos de servicio) `
    conDescuento.innerText= `Con CLUB PERSONAL: \n$ ${CAMPOGRAL-CAMPOGRAL*CLUB} + $ ${COSTOS-COSTOS*CLUB} (Costos de servicio)`
}

let boton = document.getElementById("boton")

boton.onclick = () =>{
    let radio1 = document.getElementById("exampleRadios1");
    let radio2 = document.getElementById("exampleRadios2");
    //guardate el tipo de entrada (NORMAL O CON DESCUENTO)
    let tipoEntrada;
    radio1.checked ? tipoEntrada = radio1.value  : tipoEntrada = radio2.value
    localStorage.setItem("tipoEntrada",tipoEntrada)
    let cantidad = document.getElementById("select").value
    localStorage.setItem("cantidadEntradas", cantidad)
}












