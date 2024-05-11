function addToCard(quantity:number, productName:string="Elma") {
    console.log("Sepete eklendi : ürün : " + productName + " adet : " + quantity)
}

addToCard(10)

let sayHello : any = ()=>{
    console.log(typeof "Hello Tobeto!")
}

sayHello()

let sayHello2 : any = function () {
    console.log(typeof "Hello World")
}

sayHello2();


function addToCard2(productName:string, quantity:number, unitPrice:number){
    
}

addToCard2("Elma",5,10)
addToCard2("Armut",2,20)
addToCard2("Limon",3,15)


let product1 : any = {productName : "Elma", unitPrice : 10, quantity : 5}


function addToCard3(product:any) {
    console.log("Ürün : "+ product.productName)
    console.log("Adet : "+product.quantity)
    console.log("Fiyat : "+product.unitPrice)
}

addToCard3(product1)


let product2 : any = {productName: "Elma", unitPrice:10, quantity:5}
let product3 : any = {productName: "Elma", unitPrice:10, quantity:5}
product2 = product3
product2.productName = "Karpuz"
console.log(product3.productName)


let sayi1 : number = 10
let sayi2 : number = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)


function addToCard4(products:any) {
    console.log(products)    
}

let products : any[] = [
    {productName: "Elma", unitPrice:10, quantity:5},
    {productName: "Armut", unitPrice:10, quantity:5},
    {productName: "Karpuz", unitPrice:10, quantity:5}
]

addToCard4(products)


function add(number1:number, number2:number) {
    console.log(number1 + number2)
}

add(20,30)


function add2(...numbers:any) {
    let total : number = 0;
    for (let i=0;i<numbers.lenght;i++){
        total = total + numbers[i]}
    console.log(total)
}

add2(20,30)


let numbers : number[] = [30,10,500,600,120]

console.log(Math.max(...numbers))


let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] : any = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]

console.log(icAnadoluSehirleri)

let newProductName : string, newUnitPrice : number, newQuantity : number
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity } 
= {productName:"Elma", unitPrice:10, quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)
