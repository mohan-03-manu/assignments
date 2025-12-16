let shoppingList = [
    "Milk",
    "Eggs",
    "Bread",
    ["Apples", "Bananas", "Oranges"],
    ["Potatoes", "Tomatoes", "Onions"]
];


console.log(shoppingList)
// Accessing Specific Value:
console.log(shoppingList [0])

// Implementing push Method:
shoppingList.push("carrots")
console.log(shoppingList)


// Implementing pop Method:
shoppingList.pop("")
console.log(shoppingList)

// Implementing splice Method:
shoppingList[4].splice(1,2, "Cucumber" , "Bell Peppers")
console.log(shoppingList)



let student = {
    name: "Amit",
    age: 20,
    grade: "A",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "India"
    }
};
console.log(student)
// Fetching Specific Value:
console.log(student.name)

// Adding Value:
student.phone = "123-456-7890"
console.log(student)

// Removing Value:
delete student.grade
console.log(student)

// Modifying Value:
student.age = "21"
console.log(student)




// Task 1: Understanding if Statements:
let number = 3;
 if (number > 0) {
       console.log("Positive")
      }
 else if (number < 0 ) {
    console.log("Negative")
      }
else  {
    console.log("Zero")
      }


// Task 2: Implementing else if Statements:
let score = 80;
if (score >= 90  && score <= 100 ) {
    console.log("A")
}
else if (score >=80 && score <=89) {
    console.log("B")
}
else if (score >=70 && score<=79) {
    console.log("C")
}
else if (score >=60 && score<=69) {
    console.log("D")
}
else if (score <60) {
    console.log("F")
}



// Task 3: Exploring Truthy/Falsy Concepts:
let user = "";
if (user = ""){console.log("Truthy")
}
else {console.log("falsy")
}
