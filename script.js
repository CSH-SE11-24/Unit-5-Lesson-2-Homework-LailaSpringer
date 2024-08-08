// Task 1: Create variable called 'storeName' and set it to "CSH Store". Console log "Welcome to [storeName]"
let storeName="CSH Store"
console.log("Welcome to " + storeName)
// Task 2: Create a user object with properties 'username' (any), 'password' (any), and 'status' (online or offline). 
let userInfo ={
  userName:"layy",
  password:"hey",
  status:"offline",
};


// Task 3: Console log "[username] is [status]".
console.log(`hey ${userInfo.userName} is ${userInfo.status}`)

// Task 4: Prompt the user to enter their password and save it in a variable called passwordGuess
let passwordGuess= prompt("Please enter your password")
console.log("enter here" + passwordGuess)

// Task 5: If passwordGuess is equal to the password, console log "Welcome [username]" and change status to "online". Else, console log "Wrong password" and change status to "offline"
if(userInfo.password =="hey"){
  console.log("you are online")
}
else
 console.log("Worng Password and your still offline")



// Task 6: Create an object called hoodieInventory with the properties 'name' ("hoodie"), 'quantity' (any number), and 'price' (any number). 
let hoodieInventory ={
  name:"hoodie",
    quantity:5,
  price:35,
};



// Task 7: Console log "[name] costs [price]"
console.log(`The ${hoodieInventory.name} is ${hoodieInventory.price}`)

// Task 8: You just sold a hoodie! Change the quantity to be smaller. Console log "[quantity] [name] left in inventory." Confirm that the number changed!
hoodieInventory.quantity -=1;
console.log(`The ${hoodieInventory.name} has left in ${hoodieInventory.quantity} stock.`)


// Extra credit: Change task 5 such that if the user guesses the password wrong, it keeps prompting them until they guess correctly!

