console.log("Merhaba Tobeto")

let dolarBugün : number = 9.30

let dolarDun : number = 9.20
dolarDun = 9.20
{
    let dolarDun : number = 9.10
}

console.log(typeof dolarDun)

const euroDun : number = 11.2

console.log(typeof euroDun)

let konutKredileri : string[] = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi", "Özel Konut Kredisi"]

console.log("<ul>")
for(let i : any = 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

console.log(typeof konutKredileri)

