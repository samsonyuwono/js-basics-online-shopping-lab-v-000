var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100);
  var item_object= {};
  item_object[item] = price;
  cart.push(item_object)
  console.log(item + " has been added to your cart.");
  return cart
}

function viewCart() {
  if(cart.length===0){
    console.log("Your shopping cart is empty.")
    }
    else{
      var items = []
      for(var i= 0; i< cart.length; i++){
        for(var item in cart[i]){
          items.push(item + " at $" + cart[i][item])
        }
      }
      console.log("In your cart, you have " + items.join(", ") + ".")
    }
  }

function total() {
  var t= 0
  for(var i=0; i< cart.length; i++){
    for (var item in cart[i]){
      t+= cart[i][item]
    }
  }
  return t
}

function removeFromCart(item) {
  for(var i=0; i < cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
      cart.splice(i, 1);
    }
  }
    if(!cart.hasOwnProperty(item)){
      console.log("That item is not in your cart.")
    }
  return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber){
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else{
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".");
    cart = []
  }
}
