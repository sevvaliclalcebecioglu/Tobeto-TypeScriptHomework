let cart : any[] = [
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, productName:"Bardak", quantity:2, unitPrice:30},
    {id:3, productName:"Kalem", quantity:1, unitPrice:20},
    {id:4, productName:"Şarj Cihazı", quantity:2, unitPrice:100},
    {id:5, productName:"Kitap", quantity:3, unitPrice:30},
    {id:6, productName:"Pot", quantity:5, unitPrice:150},
] 


console.log("<ul>")
cart.map(product=>{
    console.log("<li>"+product.productName + " : " 
    + product.unitPrice * product.quantity+"</li>")
})
console.log("</ul>")

let total : any = cart.reduce((acc,product)=>acc+ product.unitPrice * product.quantity,0)

console.log(typeof total)

let quantityOver2 : any = cart.filter(product=>product.quantity>2)

console.log(typeof quantityOver2)

function addToCart(sepet:any) {
    sepet.push({id:7, productName:"Ruhsat", quantity:1, unitPrice:20})
}


addToCart(cart)

console.log(typeof cart)

let sayi : number = 10

function sayiTopla(number:number) {
    number += 1
}
sayiTopla(sayi)
console.log(typeof sayi)