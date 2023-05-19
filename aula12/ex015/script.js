
function verificar(){
    var data =new Date()
    var ano= data.getFullYear()
    var fano= document.getElementById('txtano')
    var res= document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) >ano) {
        window.alert('[ERROR] verifique os dados e tente novamente')
    } else {
        var fsex= document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero =''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked) {
             gênero= 'homem'
           if (idade >= 0 && idade <14) {
             //criança
             img.setAttribute('src', 'bebe menino.png')
           }else if ( idade <21){
            //jovem
            img.setAttribute('src','jovem homem.png')
           }else if(idade <50){
            //adulto
            img.setAttribute('src','adulto homem.png')
           }else {
            //idoso
            img.setAttribute('src','idoso homem.png')
           }
               
        } else if (fsex[1].checked){
            gênero = 'mulher'
            if (idade >= 0 && idade <10) {
                //criança
                img.setAttribute('src','bebe menina.png')
              }else if ( idade <21){
               //jovem
               img.setAttribute('src','jovem mulher.png')
              }else if(idade <50){
               //adulto
               img.setAttribute('src','adulto mulher.png')
              }else {
               //idoso
               img.setAttribute('src', 'idosa mulher.png')
              }
        }
        res.style.textAling = 'center'
        res.innerHTML=`detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
        //add conteudo pelo js
    }
}   