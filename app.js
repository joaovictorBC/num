let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1 ;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
        campo.innerHTML = texto;
        responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}
function mensagemInicial(){
exibirTextoNaTela("h1", "Jogo do numero secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}
mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
   //console.log(chute == numeroSecreto);
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1' , 'Acertou ');
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você ganhou com ${tentativa} ${palavraTentativa}`;
        exibirTextoNaTela("p" , mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela("p" ,"O número é menor");
        } else {
            exibirTextoNaTela("p","O número é maior");
        } tentativa++;
    }
};


function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
    function gerarNumeroAleatorio(){
       let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
       let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

if (quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumerosSorteados = [];
}

       if (listaDeNumerosSorteados.includes(numeroEscolhido)){
         return gerarNumeroAleatorio();
       } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log (listaDeNumerosSorteados);
         return numeroEscolhido;
         
       }
    }
    
    function reiniciarJogo(){
   numeroSecreto = gerarNumeroAleatorio();
   limparCampo();
   tentativa = 1;
mensagemInicial ();
document.getElementById('reiniciar').setAttribute('disabled',true)
    }
