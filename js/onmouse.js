function verImg() {
    var img = document.createElement('img')
    img.src = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dw-burnett-lamborghini-centenario-2-1510846404.jpg?crop=0.837xw:0.627xh;0.163xw,0.0817xh&resize=480:*'
    img.style.width = '190px'
    img.style.height = '98px'
    document.getElementById('imagem').appendChild(img)
}
// Passando como parâmetro um elemento
function esconderImg(elemento) {
    // document.getElementById('imagem').innerHTML = 'Veja a img'
    elemento.innerHTML = 'Veja a img'
}
function load() {
    alert('Olá! Bem-vido, senhor Lucas!')
}
function change(elemento) {
    // O value vai pegar o valor do elemento
    document.write(elemento.value)
}