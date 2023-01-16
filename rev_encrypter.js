function toRevEncrypt(){
    const TXT_REV_ENCRYPT = document.getElementById("entry").value;
    let revEncrypted = TXT_REV_ENCRYPT;

    for(let char in TXT_REV_ENCRYPT){
        if((/[a-z]¿¡\u0020-\u002f\u003a-\u0040\u005b-\u0060\u007b-\u007e]/.test(TXT_REV_ENCRYPT[char])) !== false){
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
        const CHAR_TWIST_KEYS = Object.keys(CHAR_TWIST);

        for (let i = 0; i < CHAR_TWIST_KEYS.length; i++) {
            if(TXT_REV_ENCRYPT.includes(CHAR_TWIST_KEYS[i])){
                revEncrypted = revEncrypted.replaceAll(CHAR_TWIST_KEYS[i], CHAR_TWIST[CHAR_TWIST_KEYS[i]])

                console.log(CHAR_TWIST[CHAR_TWIST_KEYS[i]] + "  " + CHAR_TWIST_KEYS[i])

            }
            
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