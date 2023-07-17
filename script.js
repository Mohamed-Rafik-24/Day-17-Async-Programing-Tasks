let content = document.createElement('p');
content.style.textAlign = 'center'
content.style.color = 'green'
content.style.fontSize = '50px'
document.body.append(content);



function foo () {
    setTimeout(()=>{
       content.innerHTML = '10'
       setTimeout(()=>{
        content.innerHTML = '9'
        setTimeout(()=>{
            content.innerHTML = '8'
        setTimeout(()=>{
            content.innerHTML = '7'
        setTimeout(()=>{
            content.innerHTML = '6'
        setTimeout(()=>{
            content.innerHTML = '5'
        setTimeout(()=>{
            content.innerHTML = '4'
        setTimeout(()=>{
            content.innerHTML = '3'
        setTimeout(()=>{
            content.innerHTML = '2'
        setTimeout(()=>{
            content.innerHTML = '1'
        setTimeout(()=>{
            content.innerHTML = 'Happy Independence Day'
        },1000)    
        },1000)    
        },1000)    
        },1000)    
        },1000)    
        },1000)
        },1000)
        },1000)
        },1000)
       },1000)
    },1000)

}

foo()