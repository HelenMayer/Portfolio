function MenuClick(whichPic) {
    var source=whichPic.getAttribute("href")
    var placeholder=document.getElementById("placeholder")
    placeholder.setAttribute("src", source)
    var kuvaname=whichPic.getAttribute("title")
    var text=document.getElementById("text")
    text.firstChild.nodeValue=kuvaname
}