function copyTxt(){
    const COPY_TEXT = document.getElementById("encripted").innerHTML;
    navigator.clipboard.writeText(COPY_TEXT);
    return;
}