let num = document.querySelector('input#txtn')
let lista= document.querySelector('select#flista')
let res= document.querySelector('div#res')
let valores=[]

function isNumero(n){
    if(Number(n) >= 1 && Number(n)<=100){
        return true
    }else{
        return false
    }
}


function inLista(n,l){
    if(l.indexOf(Number(n))!= -1){
        return true
    }else{
        return false
    }
}


function adicionar(){
    if(isNumero(num.value) && !inLista(num.value,valores)){
       valores.push(Number(num.value))
       let item = document.createElement('option')
       item.text =`valor ${num.value} adicionado.`
       lista.appendChild(item)
       res.innerHTML = ''
    }else{
        window.alert('[ERROR] número já encontrado na lista ou inválido ')
    }
    num.value = ''
    num.focus()

}

function finalizar(){
    if(valores.length ==0){
        window.alert('adicione valores antes de finalizar')
    }else{
        let tot= valores.length
        let maior=valores[0]
        let menor=valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma+= valores[pos]
            if(valores[pos] > maior)
                menor=valores[pos]
                if (valores[pos]<menor)
                menor = valores[pos]
        }
        media = soma/tot
        res.innerHTML =''
        res.innerHTML += `<p> Ao todo,temos ${tot} números cadastrados.</p>`
        res.innerHTML +=`<p> O maior valor informado foi ${maior}.</p>`
        res.innerHTML +=`<p> O menor valor encontrado foi${menor} </p>`
        res.innerHTML +=`<p> somando todos os valores,trmos ${soma}` 
        res.innerHTML +=`<p> A medis foi de ${media}` 
    }
}