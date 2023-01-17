function rectangle1Twist(outTxt){
    document.getElementById("muneco").style.display = "none";
    document.getElementById("inTxtadv").style.display = "none";
    document.getElementById("encripted").style.fontSize = "24px";
    document.getElementById("encripted").style.fontWeight = "400";
    document.getElementById("encripted").innerHTML= outTxt;
    document.getElementById("encripted").style.textAlign = "left";
    document.getElementById("rectangle1").style.justifyContent = "space-between";
    document.getElementById("copy").style.display = "revert";
}

