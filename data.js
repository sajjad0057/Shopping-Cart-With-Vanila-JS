const data_insert = document.querySelector("#insert_here");
const data = [
  {
    id: 0,
    name: "item_1",
    price: 28,
    image: "images/kid_pen.jpg",
  },
  {
    id: 1,
    name: "item_2",
    price: 17999,
    image: "images/laptop.jpg",
  },
  {
    id : 2,
    name : "item_3",
    price : 799,
    image : "images/lip_stick.jpg"
},
{
    id : 3,
    name : "item_4",
    price : 399,
    image : "images/pen.jpg"
}
];

const add_to_cart = ( item_id )=>{
  cart_handle(item_id)
}


data.forEach((element) => {
  data_insert.innerHTML += `
    <div class="col-sm-12 col-md-5 col-lg-3 item" id="one">
        <div class="card" style="width: 18rem;">
            <img src=${element.image} class="card-img-top" alt="...">
            <div class="card-body">
              <div class="item_head text-muted">
                <h5>${element.name}</h5>
                  <b>&#2547; ${element.price}/-</b>
              </div>
              <hr>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#">[more]</a>
            </div>
            <span class="button" onclick="add_to_cart(${element.id})">Add to cart</span>
          </div>
    </div>
`;
});












