const cart_number = document.querySelector("#cart_no");
const cart_body=document.querySelector("#cart_body");
const total_cost=document.querySelector("#total_cost");
const cart_toggle = document.querySelector("#cart_toggle");

var state = false;

var cart = document.querySelector(".cart");
cart.onclick = function() {
  state = !state;
  if (state) {
    cart_body_render()
    //console.log("********",state)
  }else{
    cart_body_hide()
    //console.log("++++++++",state)
  }
}






let cart_details = new Set();

console.log("cart_details :",cart_details);
cart_number.innerHTML = cart_details.size;
const cart_handle = (item_id) => {
  cart_details.add(item_id);
  
  cart_number.innerHTML = cart_details.size;
};

// let cart_body = document.querySelector("#cart_body")
// cart_details.forEach((x)=>{
//     cart_body.innerHTML += `
//     <div >${x}</div>
// `
// })

// const total_price=()=>{
//   let cost = ''
//   cart_details.forEach((x)=>{
//     cost+=`
//     <span></span>
//     `
//   })
// }

function cart_body_hide(){
  console.log("cart_body_hide Called");
  cart_toggle.classList.remove("right","shadow-lg", "p-3", "mb-5", "rounded")
  cart_body.innerHTML=""
  total_cost.innerHTML=""
}


function cart_body_render(){
  let temp="";
  var cost=0
  cart_details.forEach((x)=>{
    globalThis.cost=0
    temp += `
    <div>${data[x].name}  ---- -----  ${data[x].price}  taka.--<button>+</button><button>-</button></div>
`
    cost+=data[x].price

})
console.log(cost)
cart_toggle.classList.add("right","shadow-lg", "p-3", "mb-5", "rounded")
cart_body.innerHTML=temp;
total_cost.innerHTML=`<h4>Total Price : ${cost}</h4> `;
}




