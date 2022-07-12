function mostarCalculadora(a){
    alert(a.id)
    let contenedorCalculadoraBit=document.getElementById("calculadora_bit")
    let contenedorCalculadoraSub=document.getElementById("calculadora_sub")
    if(a.id==="bit"){
        contenedorCalculadoraBit.classList.remove("ocultar")
    }
    else{
        contenedorCalculadoraBit.classList.add("ocultar")
    }
    if(a.id==="sub"){
        contenedorCalculadoraSub.classList.remove("ocultar")
    }
    else{
        contenedorCalculadoraSub.classList.add("ocultar")
    }
}


function calcularBits(){
    let valorIva=parseInt(document.getElementById("campoIva").value)
    let porcentajeDelIva=valorIva/100
    let valorDelBit=parseFloat(document.getElementById("campoValorBit").value)
    let cantidadDeBits=parseInt(document.getElementById("campoCantidadBits").value)
    let resultadosCalculoDeDolaresHaBits=document.getElementById("resultadosCalculoDeDolaresHaBits")
    let resultadosCalculoDeDolaresMasIva=document.getElementById("resultadosCalculoDeDolaresMasIva")
    resultadosCalculoDeDolaresHaBits.value=cantidadDeBits*valorDelBit
    resultadosCalculoDeDolaresMasIva.value=resultadosCalculoDeDolaresHaBits.value*porcentajeDelIva
}

