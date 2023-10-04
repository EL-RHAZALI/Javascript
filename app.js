var x=0
function incr(){
    x=x+1
    var incr=document.getElementById('nbr');
    incr.innerText=x
    if (x>0) {
        incr.style="color:green"
    }
}
function restart(){
    x=0
    var restart=document.getElementById('nbr');
    restart.innerText=x
    if (x==0) {
        restart.style="color:black"
    }
}
function decr(){
    x=x-1
    var decr=document.getElementById('nbr');
    decr.innerText=x
    if (x<0) {
        decr.style="color:red"
    }
}
