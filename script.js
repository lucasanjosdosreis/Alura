var textarea = window.document.querySelector('textarea.area')
var botaoCriptografa = window.document.querySelector('button.botao-criptografar')
var botaoDescriptografa = window.document.querySelector('button.botao-descriptografar')
var botaoCopiar = window.document.querySelector('button.botao-copiar')
var imagem = window.document.querySelector('img.imagem')
var mensagem =window.document.querySelector('h1.mensagem')

// Criptografa o texto que o usuário digita
botaoCriptografa.addEventListener('click', function() {
    var frase = window.document.querySelector('textarea.entrada')
    var texto = frase.value;
    var fraseCriptografada = texto.replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('a', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat')
    var resultado = window.document.querySelector('textarea.area')
    resultado.innerHTML = fraseCriptografada
})


// Descriptografa o texto da saida
botaoDescriptografa.addEventListener('click', function() {
    var resultado = window.document.querySelector('textarea.area')
    var texto = resultado.innerText;
    var fraseDescriptografada = texto.replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ai', 'a').replaceAll('ober', 'o').replaceAll('ufat', 'u')
    resultado.innerText = fraseDescriptografada
})


 // Descriptografa o texto da entrada
 botaoDescriptografa.addEventListener('click', function() {
    var frase = window.document.querySelector('textarea.entrada')
    var texto = frase.value;
    var fraseDescriptografada =  texto.replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ai', 'a').replaceAll('ober', 'o').replaceAll('ufat', 'u')
    var resultado = window.document.querySelector('textarea.area')
    resultado.innerText = fraseDescriptografada
 })

// Faz o conteudo da saida desaparecer para aparecer o textarea
botaoCriptografa.addEventListener("click", function() {
    textarea.style.display = "block";
    botaoCopiar.style.display = 'block';
    imagem.style.display = 'none'
    mensagem.style.display = 'none'
});

botaoDescriptografa.addEventListener('click', function() {
    textarea.style.display = 'block';
    botaoCopiar.style.display = 'block';
    imagem.style.display = 'none'
    mensagem.style.display = 'none'
})

// Função para copiar o texto da área de saída 
botaoCopiar.addEventListener('click', function() {
    navigator.clipboard.writeText(textarea.innerHTML)
    Swal.fire({
        icon: 'success',
        title: 'Texto copiado para a área de transferência.',
    })
})