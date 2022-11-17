const array=["Roboto", "Mansalva" , "Grenze" , "Turret Road" , "Fantasy"]
let index=0;
function ButtonClick() {
    index++;
    document.getElementById("text").style.fontFamily=array[index%5]
    document.getElementById("fontFamily").textContent="Fontti on nyt: "+array[index%5]
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}