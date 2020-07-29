//document.getElementById("click-one").onclick = displaytext("first button");
//document.getElementById("click-two").onclick = displaytext("second button");

function displaytext(text){
    document.getElementById("javascriptText").innerText=text;
    if(text == "button 1"){
        document.getElementById("javascriptText").style.color="blue";
    }
    else{
        document.getElementById("javascriptText").className = "new-style";
        document.getElementById("javascriptText").style.color="red";
    }
};