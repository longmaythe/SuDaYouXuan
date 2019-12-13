window.onload=function(){
    setRem(750)
}
window.onresize=function(){
    setRem(750)
}

function setRem(i){
    const html=document.documentElement
    const clientW=document.documentElement.clientWidth||document.body.clientWidth
    html.style.fontSize=clientW/i*100*2+'px'
}