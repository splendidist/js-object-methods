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

//write an array of objects (minimum 4). Each object should represent
//a book and have a property for name, author, year, and genre
//the first two are strings, year is number, genre is an array of genres
//lastly, write a loop that goes through each book and puts something
//onto the DOM for each book

const books = [
  {
    title: "Design as Art",
    author: "Bruno Munari",
    year: 1966,
    genre: ["Non-fiction", "Design", "Art History"],
  },
  {
    title: "Iron Flame",
    author: "Rebecca Yarros",
    year: 2023,
    genre: ["Romance", "Fantasy", "Fiction"],
  },
  {
    title: "S.",
    author: ["J.J. Abrams", "Doug Dorst"],
    year: 2013,
    genre: ["Mystery", "Fantasy", "Fiction"],
  },
  {
    title: "Heartstopper Volume 5",
    author: "Alice Oseman",
    year: 2023,
    genre: ["Romance", "Graphic Novel", "Fiction"],
  },
];

for (let i = 0; i < 4; i++) {
  //this is 4 as there are no indexs in an object
  console.log(`I am currently reading ${books[i].title}`);
}
