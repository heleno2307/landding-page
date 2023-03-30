let cont = 1
document.getElementById("radio1").checked = true

setInterval(function(){
    nextimage()
},7000)

function nextimage(){
    cont++;
    if(cont>2){
        cont=1
    }
    document.getElementById("radio"+cont).checked = true
}