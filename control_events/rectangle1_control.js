function rectangle1Twist(outTxt){
    document.getElementById("inTxtadv").style.display = "none";
    document.getElementById("encripted").style.fontSize = "24px";
    document.getElementById("encripted").style.fontWeight = "400";
    document.getElementById("encripted").innerHTML= outTxt;
    document.getElementById("encripted").style.textAlign = "left";
    document.getElementById("copy").style.display = "revert";
    document.getElementById("rectangle1").style.justifyContent = "space-between";

    if(window.screen.width > 768){
        document.getElementById("muneco").style.display = "none";
    }  
    else if(window.screen.width <= 768 && window.screen.width > 375){
        document.getElementById("main").style.height = "115.88756vh"
        document.getElementById("frame5").style.height = "19.2926vh";
        document.getElementById("copy").style.margin = "5px 32px 32px"; 
    }else if(window.screen.width <= 375){
        document.getElementById("main").style.height = "183.81565vh"
        document.getElementById("frame5").style.height = "63.77278vh";
        document.getElementById("copy").style.margin = "5px 32px 32px"; 
    }
    
    return;
}

