let koko=16;
function ButtonClick() {
        if (koko==32) {
            koko=16;
        }
        else{
            koko+=4;
        }
        document.getElementById("text").style.fontSize=koko+"px";
        document.getElementById("koko").textContent="Fonttikoko nyt: "+koko+"px"
    }

