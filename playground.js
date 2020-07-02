//object destructing.....
const product={
    label:'bata zombo',
    price:100,
    stock:4,
    rating:5
}

// const label=product.label
// const price=product.price

//const {label:productLabel,stock}=product
//console.log(productLabel)
//console.log(stock)

// const {label,stock,price,rating=4.3}=product
// console.log(label)
// console.log(stock)
// console.log(price)
// console.log(rating)

const transaction=(type,{label,stock})=>{
    console.log(type,label,stock)
}
transaction('order',product)
