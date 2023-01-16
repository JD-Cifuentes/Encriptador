function toRevEncrypt(){
    const TXT_REV_ENCRYPT = document.getElementById("entry").value;
    let revEncrypted = "";

    for(let char in TXT_REV_ENCRYPT){
        if(TXT_REV_ENCRYPT.codePointAt(char) < 96 || TXT_REV_ENCRYPT.codePointAt(char) > 122){
            document.getElementById("entry").value = "";
            document.getElementById("entry").placeholder = "Recuerde que solo se pueden letras minúsculas y sin acento. Por favor, intente nuevamente.";
            return;
        }
    }

    if(TXT_REV_ENCRYPT === ""){
        document.getElementById("entry").placeholder = "No has ingresado ningún texto, prueba nuevamente.";
        
        return;
    }else if(TXT_REV_ENCRYPT){

        const CHAR_TWIST ={
            ai : "a",
            enter : "e",
            imes : "i",
            ober : "o",
            ufat : "u"
        }

        for(let char in TXT_REV_ENCRYPT){
            revEncrypted += CHAR_TWIST[TXT_REV_ENCRYPT[char]] || TXT_REV_ENCRYPT[char]
        }

        document.getElementById("muneco").style.display = "none";
        document.getElementById("inTxtadv").style.display = "none";
        document.getElementById("encripted").style.fontSize = "24px";
        document.getElementById("encripted").style.fontWeight = "400";
        document.getElementById("encripted").innerHTML= revEncrypted;
        document.getElementById("encripted").style.textAlign = "left";
        document.getElementById("rectangle1").style.justifyContent = "flex-start";
        return;
    }  
}