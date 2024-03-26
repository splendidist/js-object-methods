//Creating methods

const person = {
  name: "Lucy",
  age: 25,
  favouriteColour: "pink",
  sayHello: function () {
    console.log("Hello!");
  },
};

person.sayHello(); //Output: Hello!

//Passing arguments

const personTwo = {
  name: "Liam",
  age: 24,
  favouriteColour: "blue",
  sayHello: function (name) {
    console.log("Hello " + name + "!");
  },
};

personTwo.sayHello("Misty"); //Output: Hello Misty!

//Returning values

const personThree = {
  name: "Misty",
  age: 4,
  favouriteColour: "pink",
  getAge: function () {
    return personThree.age;
  },
};

const age = personThree.getAge();

console.log(age); //Output: 4

//

const car = {
  make: "Stellantis",
  model: "fiat 500",
  colour: "pink",
  myAdvert: function () {
    console.log(
      "Buy this",
      car.model,
      "made by",
      car.make,
      "in our bestselling colour",
      car.colour
    );
  },
};

car.myAdvert();

const book = {
  title: "Design as Art",
  author: "Bruno Munari",
  pages: "223",
  myAdvert: function () {
    console.log(
      "Read this book:",
      book.title,
      "by",
      book.author,
      "with only",
      book.pages,
      "pages"
    );
  },
};

book.myAdvert();
