interface IPerson {
  name: string;
  city: string;
  age: number;
  isAboveAge(age: number): boolean;
}

const callum: IPerson = {
  name: "callum",
  city: "glasgow",
  age: 21,
  isAboveAge(age: number): boolean {
    return this.age > age;
  },
};

const person2: IPerson = {
  name: "person2",
  age: 32,
};

/*
    as you can see typescript will not allow an object to be created
    if attributes are missing from the interface. this means you can
    consistenly assume what that type will contain when passing it as
    a parameter, i.e.
*/

function add1YearToPerson(person: IPerson) {
  person.age++;
}

/*
    in plain js if you accidentally create an IPerson without
    an age this function will cause an error at runtime and not
    before. Which could create a confusing problem to solve.
*/
