const body = document.getElementsByTagName("body")[0]

const otsikko = document.createElement("h1")
const title = document.createTextNode("Snaphots")
otsikko.appendChild(title)
body.appendChild(otsikko)

const imgArray = ["https://www.helsinkitimes.fi/images/2022/1-Jan/67258715.jpg", "https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg", "https://www.rd.com/wp-content/uploads/2022/01/GettyImages-174655938.jpg", "https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/big-ben/big-ben-henry-be-unsplash640x360jpg.jpg?h=360&w=640&la=en&hash=52C1CFA8C35FA20AFD4DFE548C0ACF86A0560670"]

let linkkiArray = []

const ul = document.createElement("ul")
body.appendChild(ul)
const array = ['Fireworks', 'Coffee', 'Rose', 'Big Ben']

let placeholder = document.createElement("img")
placeholder.id = "placeholder"
placeholder.src=imgArray[0]
body.appendChild(placeholder)

const p = document.createElement("p")
p.id="text"
var kuvanotsikko = document.createTextNode(array[0])
p.appendChild(kuvanotsikko)

const section = document.createElement("section")
section.appendChild(ul)
section.appendChild(placeholder)
section.appendChild(p)
body.appendChild(section)

for (let index = 0; index < array.length; index++) {
    var li = document.createElement("li")
    var tekst = document.createTextNode(array[index])
    var a = document.createElement("a")
    a.appendChild(tekst)
    a.title = array[index]
    a.href=imgArray[index]
    a.id=index
    a.addEventListener("click", function (){
        var number = this.id
        var source = imgArray[number]
        console.log(imgArray[number])

        document.getElementById("text").textContent =array[number]
        //document.getElementById("placeholder").setAttribute(src , source)
        
        var placeholder = document.getElementsByTagName("img")
        placeholder.src = source
        body.appendChild(placeholder)
        console.log(placeholder.src)
        var kuvanimi = document.getElementsByTagName("p")[0]
        kuvanimi = array[number]
    })
    li.appendChild(a)
    ul.appendChild(li)
}

