function toEncrypt(){
    const TXT_TO_ENCRYPT = document.getElementById("entry").value;
    let encrypted = "";

    for(let char in TXT_TO_ENCRYPT){
        if(TXT_TO_ENCRYPT.codePointAt(char) < 96 || TXT_TO_ENCRYPT.codePointAt(char) > 122){
            document.getElementById("entry").value = "";
            document.getElementById("entry").placeholder = "Recuerde que solo se pueden letras minúsculas y sin acento. Por favor, intente nuevamente.";
            return;
        }
    }

    if(TXT_TO_ENCRYPT === ""){
        document.getElementById("entry").placeholder = "No has ingresado ningún texto, prueba nuevamente.";
        
        return;
    }else if(TXT_TO_ENCRYPT){

        const CHAR_TWIST ={
            a : "ai",
            e : "enter",
            i : "imes",
            o : "ober",
            u : "ufat"
        }

        for(let char in TXT_TO_ENCRYPT){
            encrypted += CHAR_TWIST[TXT_TO_ENCRYPT[char]] || TXT_TO_ENCRYPT[char]
        }

        document.getElementById("muneco").style.display = "none";
        document.getElementById("inTxtadv").style.display = "none";
        document.getElementById("encripted").style.fontSize = "24px";
        document.getElementById("encripted").style.fontWeight = "400";
        document.getElementById("encripted").innerHTML= encrypted;
        document.getElementById("encripted").style.textAlign = "left";
        document.getElementById("rectangle1").style.justifyContent = "flex-start";
        return;
    }  
}
