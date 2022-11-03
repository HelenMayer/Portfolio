function GetStyle() {
    const container=document.getElementById("container");
    container.style.width="60%";
    container.style.backgroundColor="#f5ead0";
    container.style.marginLeft="auto";
    container.style.marginRight="auto";
    container.style.padding="2rem";
    container.style.paddingTop="1rem";

    document.getElementById("kuva").style.display="block";
    document.getElementById("kuva").style.marginLeft="auto";
    document.getElementById("kuva").style.marginRight="auto";
    document.getElementById("kuva").style.maxWidth="100%";


    const header=document.getElementById("menu");
    header.style.display="flex";
    header.style.justifyContent="space-between"

    let arrayItem = document.querySelectorAll(".item");
    for (let index = 0; index < arrayItem.length; index++) {
        arrayItem[index].style.backgroundColor="#b89176";
    }

    let arrayListBlock=document.querySelectorAll(".list_block");
    for (let index = 0; index < arrayListBlock.length; index++) {
        arrayListBlock[index].style.display="block";
        arrayListBlock[index].style.width="30%";
    }
    
    document.getElementById("menu").style.listStyle="none";

    document.getElementById("table-1").style.width="100%";    
    document.getElementById("table-2").style.width="100%";  

    let arrayTrColor=document.querySelectorAll(".trColor");
    for (let index = 0; index < arrayTrColor.length; index++) {
        arrayTrColor[index].style.backgroundColor="#b89176";
    }
}