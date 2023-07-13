function trocaCaractereTporSete(textoTroca){
    let n = textoTroca.replace(/t+/ig, "7");
    console.log(n)
}

function regexBuscaPalavra(texto){
    const textin = texto.match(/mãe+/ig).length;
    console.log(textin)
}

function soPodeMaiusculo(textoMaiusculo){
    if(/^[A-Z]+$/.test(textoMaiusculo)){
        console.log(textoMaiusculo);
    } else {
        console.log("O texto precisa ser maiúsculo")
    }
}

//trocaCaractereTporSete("Tudo bem?");
//regexBuscaPalavra("Ser carnívoro e comer animais é como mães, eu amo minha mãe, mas comeria a sua mãe");
soPodeMaiusculo("EAE");