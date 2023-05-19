function carregar() {
    var msg= window.document.getElementById('msg')
    var img= window.document.getElementById('imagem')
    var data=new Date()
    var hora= data.getHours()
    var minuto=data.getMinutes()
    msg.innerHTML = `agora são ${hora}:${minuto}`
    if (hora >= 0 && hora < 12) {
        //BOMDIA
        img.src= '/aula12/manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src="/aula12/tarde.png"
        document.body.style.background ='#b9846f'
    }  else {
        //BOA NOITE!
        img.src= "/aula12/noite.png"
        document.body.style.background ='#515154'

    }
}