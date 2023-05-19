function tabuada() {
    var num= window.document.getElementById('txtn')
    var tab= window.document.getElementById('seltab')
    if(num.value == 0){
        window.alert("por favor digite um numero")
    }else{
        var n = Number(num.value)
        var c= 1
        tab.innerHTML=''
        while(c<= 10 ){                   
        let item= document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        tab.appendChild(item)
        c++
    }
    
}}