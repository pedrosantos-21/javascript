function contar() {
    var start=document.getElementById('txts')
    var end=document.getElementById('txten')
    var step=document.getElementById('txtst')
    let res=document.getElementById('res')
    if(start.value.length == 0 || end.value.length ==0 || step.value.length == 0){
        res.innerHTML='impossible to count'
    }else{
        res.innerHTML='counting... <br>'
        let s = Number(start.value)
        let e= Number(end.value)
        let st= Number(step.value)
        if(st<=0){
        window.alert('[ERROR] invalid step! considering step one')
         st=1
         }
         if(s< e){
        for(let c=s;c<=e;e+=st){
        res.innerHTML+=`${c} \u{1F449} `
            }
    } else {
        for(let c=s;c<=e;e+=st){
        res.innerHTML+=`\u{1F449}  `
        } 

    }res.innerHTML+= `\u{1F3C1} `
}
}