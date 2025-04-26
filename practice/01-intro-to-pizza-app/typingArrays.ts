let ages: number[] = [100, 101]
ages.push()

type People = {
  name: string,
  age: number,
  isStudent: boolean
}

let People1: People = {
  name: "Joe",
  age: 42,
  isStudent: true
}

let People2: People = {
  name: "Jill",
  age: 66,
  isStudent: false
}

// let PeopleArray: People[] =[People1, People2]
// console.log(PeopleArray)

let PeopleArray: Array<People> =[People1, People2]
console.log(PeopleArray)