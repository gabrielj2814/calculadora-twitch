function calcularBits(){
    let valorIva=parseInt(document.getElementById("campoIva").value)
    let porcentajeDelIva=valorIva/100
    let valorDelBit=parseFloat(document.getElementById("campoValorBit").value)
    let cantidadDeBits=parseInt(document.getElementById("campoCantidadBits").value)
    let resultadosCalculoDeDolaresHaBits=document.getElementById("resultadosCalculoDeDolaresHaBits")
    let resultadosCalculoDeDolaresMasIva=document.getElementById("resultadosCalculoDeDolaresMasIva")
    if(validarCampo(valorIva)){
        if(validarCampo(valorDelBit)){
            if(validarCampo(cantidadDeBits)){
                resultadosCalculoDeDolaresHaBits.value=cantidadDeBits*valorDelBit
                resultadosCalculoDeDolaresMasIva.value=resultadosCalculoDeDolaresHaBits.value*porcentajeDelIva
            }
            else{
                resultadosCalculoDeDolaresHaBits.value=""
                resultadosCalculoDeDolaresMasIva.value=""
            }
        }
        else{
            resultadosCalculoDeDolaresHaBits.value=""
            resultadosCalculoDeDolaresMasIva.value=""
        }
    }
    else{
        resultadosCalculoDeDolaresHaBits.value=""
        resultadosCalculoDeDolaresMasIva.value=""
    }
}

function validarCampo(valor){
    let espaciosEnBlanco=/\s/g
    let letras=/[a-zA-Z]/g
    if(valor===""){
        return false
    }
    if(espaciosEnBlanco.test(valor)){
        return false
    }
    if(letras.test(valor)){
        return false
    }
    return true
}



