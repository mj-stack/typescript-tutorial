let myName: string = "Mukul"

//Challenge
let numberOfWheels: number = 21
let isStudent: boolean = true

type Food = string
let favouriteFood: Food = "pizza"

type Address = {
  street: string,
  city: string,
  country: string
}

type Person = {
  name: string,
  age: number,
  isStudent: boolean,
  address?: Address
}

let person1: Person = {
  name: "Joe",
  age: 42,
  isStudent: false,
  address: {
    street: "123 Main",
    city: "Any town",
    country: "USA"
  }
}

let person2: Person = {
  name: "Joe",
  age: 40,
  isStudent: false,
}