
    const RELOAD_LOGO = document.getElementById("logo");
    if(RELOAD_LOGO){
        logoSize();
    }
    
    function logoSize() {
        if(window.screen.width <= 768 && window.screen.width > 375){
            RELOAD_LOGO.src = "./img/logo_tab_1x.png";    
            return;
        }
        if(window.screen.width <= 375){
            RELOAD_LOGO.src = "./img/logo_cell_2x.png";    
            return;
        }
        return;
    }



