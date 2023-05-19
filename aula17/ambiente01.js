let amigo = {nome:'josé',
sexo : 'M' ,
peso : 85.4 ,
engordar(p){
    console.log('engordou')
    this.peso += p
} }
amigo.engordou(2)
console.log(`${amigo.nome} pes ${amigo.pesa}Kg`)