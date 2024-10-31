function makeTransaction(quantity, pricePerDroid) {
   const totalPrice = `You ordered ${quantity} droids worth ${pricePerDroid} credits!`
   
   console.log(totalPrice)
}

makeTransaction(5, 3000);
makeTransaction(3, 1000);
makeTransaction(10, 500);