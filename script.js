const gombok = document.getElementById("gombok")

for(let i = 9; i >= 0; i--){
    gombok.innerHTML += '<button onclick="numberPressed('+i+')">'+i+'</button>'
}
gombok.innerHTML += '<button id="clearbtn">C</button>'
gombok.innerHTML += '<button id="kiadbtn">Kiad</button>'


function numberPressed(num){
    alert(num)
}