function toEncrypt(){
    const TXT_TO_ENCRYPT = document.getElementById("entry").value;
    let encrypted = "";
    

    for(let char in TXT_TO_ENCRYPT){
        
        if((/[a-z]¿¡\u0020-\u002f\u003a-\u0040\u005b-\u0060\u007b-\u007e]/.test(TXT_TO_ENCRYPT[char])) !== false){
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
            encrypted += CHAR_TWIST[TXT_TO_ENCRYPT[char]] || TXT_TO_ENCRYPT[char];
        }

        rectangle1Twist(encrypted);
        return;
    }  
}