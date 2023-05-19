var agora = new Date()
var diaSem = agora.getDay()
/*
0=domingo
1=seg
2=ter
3=quarta
4=quinta
5=sexta
6=sábado
*/

console.log(diaSem)
switch(diaSem){
    case 0:
        console.log('domigo')
        break
    case 1:
        console.log('segunda')
        break
    case 2:break
        console.log('trça')
    case 3:
        console.log('quarta')
        break
    case 4:
        console.log('quinta')
        break
    case 5:
        console.log('sexta')
        break 
    case 6:
        console.log('sábado')
        break
    default:
        console.log('[ERRO] Dia invalido')                                   
}