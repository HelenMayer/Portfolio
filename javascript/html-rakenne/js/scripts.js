const body = document.getElementsByTagName("body")[0]

const header = document.createElement("header")
const main = document.createElement("section")
main.id = "main"
const footer = document.createElement("footer")

body.appendChild(header)
body.appendChild(main)
body.appendChild(footer)


const otsikko = document.createElement("h1")
const tekst = document.createTextNode("Tämä on otsikko")
otsikko.appendChild(tekst)

const p1 = document.createElement("p")
const tekst1 = document.createTextNode("Rnfaerfeirjgeiorjgoierajgaoie iergnjöasierghjaöoeirgj aeirjgöoiejrg oerhugaeb keabgruaiejrb kdfjguvhadkjrgn geiorjgoierajgaoie iergnjöasierghjaöoeirgj aeirjgöoiejrg oerhugaeb keabgruaiejrb kdfjguvhadkjrgn geiorjgoierajgaoie iergnjöasierghjaöoeirgj aeirjgöoiejrg oerhugaeb keabgruaiejrb kdfjguvhadkjrgn geiorjgoierajgaoie iergnjöasierghjaöoeirgj aeirjgöoiejrg oerhugaeb keabgruaiejrb kdfjguvhadkjrgn")
p1.appendChild(tekst1)

header.appendChild(otsikko)
header.appendChild(p1)

const p2 = document.createElement("p")
const tekst2 = document.createTextNode("Jgvöadj dfkjgbkjdfr djfgbkjd g.kjdergvnaejkr gvjkedrghöakje rgkjerbgj aekrj g.kjaer g.kaje  jgvöadj dfkjgbkjdfr djfgbkjd g.kjdergvnaejkr gvjkedrghöakje rgkjerbgj aekrj g.kjaer g.kaje v jgvöadj dfkjgbkjdfr djfgbkjd g.kjdergvnaejkr gvjkedrghöakje rgkjerbgj aekrj g.kjaer g.kaje jgvöadj dfkjgbkjdfr djfgbkjd g.kjdergvnaejkr gvjkedrghöakje rgkjerbgj aekrj g.kjaer g.kaje jgvöadj dfkjgbkjdfr djfgbkjd g.kjdergvnaejkr gvjkedrghöakje rgkjerbgj aekrj g.kjaer g.kaje jgvöadj dfkjgbkjdfr djfgbkjd g.kjdergvnaejkr gvjkedrghöakje rgkjerbgj aekrj g.kjaer g.kaje jgvöadj dfkjgbkjdfr djfgbkjd g.kjdergvnaejkr gvjkedrghöakje rgkjerbgj aekrj g.kjaer g.kaje")
p2.appendChild(tekst2)
main.appendChild(p2)

const img = document.createElement("img")
img.src = "https://dri.es/files/cache/blog/javascript-powered-multichannel-640w.gif"
main.appendChild(img)

const p3 = document.createElement("p")
const tekst3 = document.createTextNode("Elena Maier, 2022")
p3.appendChild(tekst3)
footer.appendChild(p3)


